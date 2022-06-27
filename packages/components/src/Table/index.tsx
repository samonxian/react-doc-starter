import React, { useMemo } from 'react';
import { Table } from 'antd';
import classnames from 'classnames';
import { isNumber, getFormatValue } from 'business-utils';
import type { ColumnsType, ColumnType, TableProps } from 'antd/lib/table';

import styles from './index.module.less';

export interface SecTableProps extends TableProps<any> {
  /**
   * 固定表头滚动高度，不设置则不固定表头
   */
  scrollY?: number;
  /**
   * 是否显示分页（前端本地分页）
   */
  showPagination?: boolean;
  /**
   * 行字段数据为undefined 或者 null 的时候展示的占位符
   */
  emptyFieldValue?: string;
  /**
   * 默认值和 antd 官方的一致为 key，如果第一条数据有 id 字段，则取 id。
   */
  rowKey?: string;
  /**
   * 完全继承 ant Table columns 字段，新增字段详细看下方
   */
  columns: TableColumn[];
}

/**
 * 基于 Antd Table 组件做了一些定制化的功能
 *
 * - columns 设置 fixed 无需按顺序
 * - 支持空数据展示 `-` 字符
 * - 可隐藏当前列
 * - 展示数据的时候默认不换行
 *
 * 属性完全继承 Antd Table 组件，新增的属性可看下方的属性
 */
const RTable: {
  (props: SecTableProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: SecTableProps) => {
  const {
    className,
    scrollY,
    showPagination,
    rowKey,
    emptyFieldValue,
    pagination,
    columns = [],
    scroll,
    dataSource,
  } = props;
  const lastColunms = useMemo(() => {
    return getLastColumns({ columns, emptyFieldValue, styles });
  }, [columns, emptyFieldValue]);

  let lastRowKey = rowKey;
  if (!rowKey && dataSource?.[0]?.id !== undefined) {
    lastRowKey = 'id';
  }

  let lastPagination = pagination;
  if (showPagination === false) {
    lastPagination = false;
  }

  return (
    <Table
      {...props}
      scroll={{ x: true, y: scrollY, ...scroll }}
      className={classnames(className, styles.container)}
      dataSource={dataSource}
      rowKey={lastRowKey}
      pagination={lastPagination}
      columns={lastColunms}
    />
  );
};

RTable.displayName = 'RTable';
RTable.defaultProps = {
  showPagination: false,
  emptyFieldValue: '-',
};

export default RTable;

export interface TableColumn extends ColumnType<any> {
  /**
   * 是否隐藏当前列
   */
  hide?: boolean;
  /**
   * 不处理字段为 null 或 undefined 的情况，即不跳过展示占位符的环节
   */
  notDealEmptyValue?: boolean;
  /**
   * 格式为 percent 或者 percent(2)，数值类的都默认保留两位数，目前支持的值如下
   * percent: 小数转百分比；
   * fixed：小数点保留位数；
   * thousandSemicolon：千分位处理；
   * rmb：分转人民币；
   * shortNumberZHCN：大数字转换为为 万，亿，万亿
   * shortNumber：大数字转换为为 w，kw
   * date: 秒级时间戳转日期格式（YYYY-MM-DD HH:mm:ss），默认为 YYYY-MM-DD 格式
   */
  format?: string;
  /**
   * 格式函数，format  处理后于 formatter
   */
  formatter?: (value: any) => any;
  /**
   * 展示数据是否换行，只有在 scroll.y 不为 true 的时候有效，默认为不换行（scroll.y=true，自动换行）。
   */
  wrap?: boolean | null;
}

export function getLastColumns(options: {
  columns: TableColumn[];
  emptyFieldValue?: string;
  styles?: Record<string, any>;
}) {
  const { columns, emptyFieldValue, styles = {} } = options;
  const leftColumns: ColumnsType<any> = [];
  const rightColumns: ColumnsType<any> = [];
  const centerColumns: ColumnsType<any> = [];

  columns
    .filter((c) => !c.hide)
    .forEach((c) => {
      const { render } = c;
      const newColumn: TableColumn = {
        // 固定表头的时候，td 不可以不换行，否则会错乱。
        ...c,
        // 宽度有设置，则需要换行
        wrap: !!c.width,
        title: (
          <div className={styles.th} style={{ width: c.width }}>
            {c.title as React.ReactNode}
          </div>
        ),
        render(text: any, record: Record<string, any>, index: number) {
          // notDealEmptyValue 在操作栏上设置这个，就不会显示为 "-"。
          if ((text === undefined || text === null) && !c.notDealEmptyValue) {
            return emptyFieldValue;
          }

          let lastText = c.formatter?.(text) || text;

          if ((typeof lastText === 'string' || isNumber(lastText)) && typeof c.format === 'string') {
            lastText = getFormatValue(lastText, c.format);
          }

          if (render) {
            lastText = render(lastText, record, index);
          }

          return <div style={{ width: c.width }}>{lastText}</div>;
        },
      };
      if (newColumn.wrap) {
        newColumn.className = classnames(c.className, styles.tdWrap);
        delete newColumn.wrap;
      } else {
        newColumn.className = classnames(c.className, styles.tdNoWrap);
      }

      if (newColumn.fixed === true || newColumn.fixed === 'left') {
        leftColumns.push(newColumn);
      } else if (newColumn.fixed === 'right') {
        rightColumns.push(newColumn);
      } else {
        centerColumns.push(newColumn);
      }
    });
  return leftColumns.concat(centerColumns).concat(rightColumns);
}
