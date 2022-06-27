/* eslint-disable @typescript-eslint/naming-convention */
import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames';
import {
  LineChart,
  AreaChart,
  BarChart,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from 'recharts';
import { getNiceTickValues } from 'recharts-scale';
import { getStringDOMWidth, getStringLength, getFormatValue } from 'business-utils';

import RechartsTooltip, { RechartsTooltipProps } from './Tooltip';
import CustomizedLegend from './CustomizedLegend';
import useFormat, { Formatter } from './useFormat';

import styles from './VarietyChart.module.less';

// 如果没有传 stroke 和 fill，根据 index 默认使用下面的值
export const colors = [
  '#1890ff',
  '#13c2c2',
  '#52c41a',
  '#a0d911',
  '#fadb14',
  '#faad14',
  '#f5222d',
  '#fa541c',
  '#fa8c16',
  '#ffbf00',
  '#f56a00',
  '#f7a20f',
  '#108ee9',
  '#00a2ae',
  '#eb2f96',
  '#722ed1',
  '#2f54eb',
];

export interface ChartData {
  /**
   * 图表展示配置的 `dataKeys` 列表，有多少项就渲染多少条图表
   * 成员属性除了自定义的 chartType，其他的和 rechart [Line](http://recharts.org/zh-CN/api/Line)、
   * [Area](http://recharts.org/zh-CN/api/Area)、[Bar](http://recharts.org/zh-CN/api/Bar) 的 props 保持一致
   */
  dataKeys?: {
    /**
     * rechart Line、Area、Bar 的 props.dataKey
     * 需要根据 chartData 成员字段进行配置
     */
    dataKey: string;
    /**
     * rechart Line、Area、Bar 的 props.dataKey
     */
    name?: string;
    /**
     * 只有在 type="composed" 中有效，图表类型，分别代表 LineChart、AreaChart、BarChart
     */
    chartType?: 'line' | 'area' | 'bar';
    hide?: boolean;
    stroke?: string;
    fill?: string;
    [x: string]: any;
  }[];
  /**
   * 图表数据源
   * 成员属性处理 `name` 字段，其他可以自定义，dataKeys中的 dataKey 需和自定义的字段名一致
   */
  chartData?: {
    /**
     * layout="horizontal" 是 name 的值为 x 轴的值。
     * layout="vertical" 是 name 的值为 x 轴的值。
     */
    name: string | number;
    [x: string]: any;
  }[];
}
export interface VarietyChartProps {
  /**
   * 图表的类型，分别对应 `<LineChart/>`,`<AreaChart/>`,`<BarChart/>`,`<ComposedChart/>`。
   * 这个属性在 VarietyChart 组件中是必填的，LinChart 等是非必填，这里为了兼容才设置为非必填。
   */
  type?: 'line' | 'area' | 'bar' | 'composed' | 'pie';
  /**
   * 数据源。
   */
  data?: ChartData;
  /**
   * 是否使用响应式，开启的话浏览器窗口大小改变会响应式适应
   */
  useResponsiveContainer?: boolean;
  /**
   * x轴 value 方式，内部做了处理，具体请看 [getFormatValue](/utils/getFormatValue)。
   */
  xAxisFormat?: string;
  /**
   * y轴 value 方式，内部做了处理，具体请看 [getFormatValue](/utils/getFormatValue)。
   */
  yAxisFormat?: string;
  /**
   * x轴 value 格式化函数。
   */
  xAxisFormatter?: Formatter;
  /**
   * y轴 value 格式化函数。
   */
  yAxisFormatter?: Formatter;
  /**
   * 图表宽度，配合 recharts ResponsiveContainer 组件使用不需要设置。
   */
  width?: number;
  /**
   * 图表高度，配合 recharts ResponsiveContainer 组件使用不需要设置。
   */
  height?: number;
  /**
   * 图表布局方式，水平或者垂直。
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * 图表是否可以横向缩放。
   */
  brush?: boolean;
  stackOffset?: 'expand';
  /**
   * 其他的 props 分别和 rechart 的 [AreaChart](http://recharts.org/zh-CN/api/AreaChart)、
   * [BarChart](http://recharts.org/zh-CN/api/BarChart)、
   * [LineChart](http://recharts.org/zh-CN/api/LineChart)
   * 的 props 保持一致。
   */
  [key: string]: any;
}

/**
 * 基于 rechart 封装了包括 LineChart、AreaChart、BarChart、ComposedChart 的图表，y 轴值的长度会自适应。
 **/
function VarietyChart(props: VarietyChartProps) {
  const {
    type,
    xAxisFormatter = (v: any) => v,
    yAxisFormatter = (v: any) => v,
    width,
    height,
    layout,
    stackOffset,
    brush,
    useResponsiveContainer,
    data: { chartData = [], dataKeys = [], dataKeys: originDataKeys } = {},
    ...restProps
  } = props;
  let { xAxisFormat = '', yAxisFormat = '' } = props;
  const isVertical = layout === 'vertical';
  const [dataKeysToRender, setDataKeysToRender] = useState(dataKeys);

  useEffect(() => {
    setDataKeysToRender(originDataKeys || []);
  }, [originDataKeys]);

  if (stackOffset === 'expand') {
    if (isVertical) {
      xAxisFormat = 'percent(0)';
    } else {
      yAxisFormat = 'percent(0)';
    }
  }

  const formatOptions = {
    layout,
    stackOffset,
    xAxisFormat,
    yAxisFormat,
    xAxisFormatter,
    yAxisFormatter,
  };
  const valueFormatter = useFormat(formatOptions);

  // 根据 type 渲染不同的图表组件
  // eslint-disable-next-line prefer-const
  let { ChartContainer, ChartItem } = useMemo(() => {
    if (type === 'area') {
      return {
        ChartContainer: AreaChart,
        ChartItem: Area,
      };
    }
    if (type === 'bar') {
      return {
        ChartContainer: BarChart,
        ChartItem: Bar,
      };
    }
    if (type === 'composed') {
      return {
        ChartContainer: ComposedChart,
        ChartItem: Line,
      };
    }

    return {
      ChartContainer: LineChart,
      ChartItem: Line,
    };
  }, [type]);

  // name 格式化处理、margin.left 根据 y 轴最大值长度做适配
  // yTicks 只有在 layout="horizontal" 才生效
  const { lastChartData, margin, yTicks } = useMemo(() => {
    const _margin = {
      top: 0,
      left: -52,
      right: 0,
      bottom: 6,
    };
    const timeFormatter = (v: any) => getFormatValue(v, isVertical ? yAxisFormat : xAxisFormat);
    const nameFormatter = (v: any) => {
      if (isVertical) {
        return yAxisFormatter(timeFormatter(v));
      }
      return xAxisFormatter(timeFormatter(v));
    };

    const allValues: number[] = [];
    const allNames: any[] = [];
    const arrDataKyesMap = dataKeysToRender.reduce<Record<string, any>>((dataKeyMap, current) => {
      if (!current.hide) {
        // eslint-disable-next-line no-param-reassign
        dataKeyMap[current.dataKey] = true;
      }
      return dataKeyMap;
    }, {});
    const _lastChartData = chartData.map((d) => {
      // 格式化 name 字段
      const formatName = nameFormatter(d.name);
      const lastD = { ...d };

      if (isVertical) {
        allNames.push(formatName);
      } else {
        // 提取所有 value 到 allValues
        // eslint-disable-next-line no-restricted-syntax
        for (const key in d) {
          if (arrDataKyesMap[key]) {
            allValues.push(Number(d[key as 'name']));
            if (d[key as 'name'] !== null) {
              lastD[key as 'name'] = Number(d[key as 'name']);
            }
          }
        }
      }

      return {
        ...lastD,
        name: formatName,
      };
    });

    let yTicks;

    if (isVertical) {
      // 获取长度最长的 names
      const maxLengthName = allNames.reduce((_maxLengthName, currentName) => {
        if (getStringLength(String(currentName)) > getStringLength(String(_maxLengthName))) {
          return currentName;
        }
        return _maxLengthName;
      }, '');
      const maxYAislLabelWidth = getStringDOMWidth(maxLengthName);
      _margin.left = _margin.left + maxYAislLabelWidth;
    } else {
      if (stackOffset === 'expand') {
        _margin.left = _margin.left + getStringDOMWidth('100%');
      } else {
        // 根据 xAxis label 长度，动态计算 margin.left 的值
        const maxValue = Math.max.apply(null, allValues);
        const minValue = (() => {
          const value = Math.min.apply(null, allValues);
          if (value > 0) {
            return 0;
          }
          return value;
        })();
        // rechart yAxis 默认是 5 个
        const tickValues = getNiceTickValues([minValue, maxValue], 5);
        // const measuringValue = tickValues[tickValues.length - 1];
        const measuringValue = tickValues.reduce((acc, cur) => {
          const formatCur = String(valueFormatter(cur));
          if (formatCur.length > acc.length) {
            return formatCur;
          }
          return acc;
        }, '');

        if (minValue === 1 && maxValue === 1) {
          // 这里的 domain 需要特殊处理，两个值都为 1 的时候，y轴展示奇怪
          yTicks = [0, 1, 2, 3, 4];
        }

        const formatValue = String(valueFormatter(measuringValue));
        const maxXAislLabelWidth = getStringDOMWidth(formatValue);

        _margin.left = _margin.left + maxXAislLabelWidth;
      }
    }

    return {
      yTicks,
      lastChartData: _lastChartData,
      margin: _margin,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartData, layout, stackOffset, dataKeysToRender]);

  // xAxis、yAxis 和 tooltip 的 props 适配
  const { xAxisProps, yAxisProps, tooltipProps } = useMemo(() => {
    let _xAxisProps = {};
    let _yAxisProps = {};
    let _tooltipProps: RechartsTooltipProps = {};

    if (layout === 'vertical') {
      _yAxisProps = {
        dataKey: 'name',
        type: 'category',
        padding: { top: 16, bottom: 16 },
      };
      _xAxisProps = {
        type: 'number',
        tickFormatter: valueFormatter,
        padding: { left: 16, right: 16 },
      };
      const isPercent = xAxisFormat.includes('percent') && stackOffset === 'expand';
      _tooltipProps = {
        formatter: isPercent ? null : valueFormatter,
        isPercent,
      };
    } else {
      _xAxisProps = {
        dataKey: 'name',
        padding: { left: 16, right: 16 },
      };
      _yAxisProps = {
        tickFormatter: valueFormatter,
        padding: { top: 16, bottom: 16 },
        ticks: yTicks,
      };
      const isPercent = yAxisFormat.includes('percent') && stackOffset === 'expand';
      _tooltipProps = {
        formatter: isPercent ? null : valueFormatter,
        isPercent,
      };
    }

    return {
      xAxisProps: _xAxisProps,
      yAxisProps: _yAxisProps,
      tooltipProps: _tooltipProps,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout, xAxisFormat, yAxisFormat]);

  const legendPayload = useMemo(
    () =>
      dataKeys.map((dataKeyObj) => ({
        value: dataKeyObj.name || dataKeyObj.dataKey,
        type: 'line',
        ...dataKeyObj,
      })),
    [dataKeys],
  );

  const renderedItemLength = dataKeysToRender.reduce((acc, cur) => {
    let count = acc;
    if (!cur.hide) {
      count += 1;
    }
    return count;
  }, 0);

  const onLegendClick = (o: { dataKey: any }) => {
    const { dataKey } = o;
    const _dataKeys = dataKeysToRender.map((dataKeyObj) => {
      const newDataKeyObj = { ...dataKeyObj };
      if (dataKeyObj.dataKey === dataKey) {
        // 保留最后一项不被隐藏
        if (renderedItemLength !== 1) {
          newDataKeyObj.hide = !newDataKeyObj.hide;
        } else {
          newDataKeyObj.hide = false;
        }
      }
      return newDataKeyObj;
    });
    setDataKeysToRender(_dataKeys);
  };

  const chartContent = (
    <ChartContainer
      width={width || 500}
      height={height || 300}
      data={lastChartData}
      layout={layout}
      margin={margin}
      stackOffset={stackOffset}
      {...restProps}
      className={classnames(styles.container, restProps.className)}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {renderedItemLength > 0 && <XAxis {...xAxisProps} />}
      {renderedItemLength > 0 && <YAxis {...yAxisProps} />}
      <Tooltip
        content={<RechartsTooltip isPercent={tooltipProps.isPercent} />}
        {...tooltipProps}
        formatter={tooltipProps.formatter as any}
      />
      {brush && <Brush />}
      {dataKeys.length > 1 && (
        <Legend
          iconType="line"
          content={<CustomizedLegend customPayload={legendPayload} onClick={onLegendClick} />}
          // brush 会影响 legend 的 margin-top
          wrapperStyle={brush ? { bottom: -2 } : { bottom: 0 }}
        />
      )}
      {dataKeysToRender.map((d, index) => {
        const { dataKey, chartType, stroke = colors[index], fill = colors[index], hide, ...restOptions } = d;

        if (hide) {
          return false;
        }

        if (type === 'composed') {
          if (chartType === 'line') {
            ChartItem = Line;
          } else if (chartType === 'area') {
            ChartItem = Area;
          } else if (chartType === 'bar') {
            ChartItem = Bar;
          }
        }
        const LastChartItem = ChartItem as typeof Area & typeof Line & typeof Bar;

        return (
          <LastChartItem
            key={dataKey}
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            fill={fill}
            stackId={stackOffset === 'expand' ? '1' : undefined}
            animationDuration={500}
            {...restOptions}
          />
        );
      })}
    </ChartContainer>
  );

  if (useResponsiveContainer) {
    return (
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height={height}>
          {chartContent}
        </ResponsiveContainer>
      </div>
    );
  }

  return <>{chartContent}</>;
}
VarietyChart.displayName = 'VarietyChart';
VarietyChart.defaultProps = {
  layout: 'horizontal',
  useResponsiveContainer: true,
  height: 300,
  brush: false,
};

export default VarietyChart;
