import React from 'react';
import {
  PieChart as RPieChart,
  Pie as RechartPie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  PieProps,
  PieLabelRenderProps,
} from 'recharts';
import RechartsTooltip from './Tooltip';
import { colors } from './VarietyChart';
import type { Overwrite } from '../interface';

export interface PieChartData {
  /**
   * 默认的 nameKey 为 `name`
   * Pie 类目文案
   */
  name?: string;
  /**
   * 默认的 dataKey 为 `value`
   * Pie 指定的字段数据源
   * string 必须是数字类型的字符串
   */
  dataKey?: number | string;
  /**
   * 饼图的用来计算比例的数值
   */
  value?: number | string;
  /**
   * 饼图弧形填充的颜色
   */
  fill?: string;
  /**
   * 其他的属性是自定义的，dataKey 会用到。
   */
  [key: string]: any;
}

export type PieChartDataItem = {
  /**
   * 默认的 nameKey 为 `name`
   * Pie 类目文案
   */
  nameKey?: string;
  /**
   * 默认的 dataKey 为 `value`
   * Pie 指定的字段数据源
   */
  dataKey?: string;
  chartData: PieChartData[];
  /**
   * 其他的属性和 recharts [Pie](http://recharts.org/zh-CN/api/Pie) 是props 一致。
   */
};
type OverwritePieChartDataItem = Overwrite<PieProps, PieChartDataItem>;
export type PieChartDataSource = PieChartData[] | OverwritePieChartDataItem | OverwritePieChartDataItem[];
export interface PieChartProps {
  /**
   * 数据源
   */
  data?: PieChartDataSource;
  /**
   * 是否使用响应式，开启的话浏览器窗口大小改变会响应式适应
   */
  useResponsiveContainer?: boolean;
  /**
   * 是否展示饼图标签
   */
  showLabel?: boolean;
  /**
   * value 格式化函数，目前的应用场景来看比较少用到。
   */
  formatter?: Function;
  /**
   * 宽度
   */
  width?: number;
  /**
   * 高度
   */
  height?: number;
  /**
   * 图表数据精度度，即保留的小数点数
   */
  valuePrecision?: number;
  /**
   * 图表百分比的，精确度
   */
  percentPrecision?: number;
  /**
   * 外直径
   */
  outerRadius?: number;
  /**
   * 内直径
   */
  innerRadius?: number;
  [key: string]: any;
}

const PieChart: {
  (props: PieChartProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: PieChartProps) => {
  const {
    width = 250,
    height = 250,
    data: outerData = [],
    formatter = (v: any) => v,
    // 精度，即保留的小数点数
    valuePrecision = 0,
    percentPrecision = 0,
    useResponsiveContainer,
    showLabel,
    outerRadius,
    innerRadius,
    ...restProps
  } = props;
  const lastFormatter = (value: any) => formatter(Number(value.toFixed(valuePrecision))).toLocaleString();
  let data: OverwritePieChartDataItem[] = [].concat(outerData as any).filter(Boolean);

  if (!data[0]?.chartData) {
    data = [{ chartData: data as unknown as PieChartData[] }];
  }

  const chartContent = (
    <RPieChart width={width} height={height} {...restProps}>
      <Tooltip content={<RechartsTooltip />} formatter={lastFormatter} />
      {data.map((d, index) => {
        const { chartData = [], ...rest } = d;
        const dataKey = rest.dataKey || 'value';
        const allValueCounts = chartData.reduce((counts, currentData) => counts + currentData[dataKey], 0);
        const lastColors = colors.slice();

        chartData.forEach((c) => {
          if (c.fill) {
            lastColors.unshift(c.fill);
          }
          // eslint-disable-next-line no-param-reassign
          c.percent = c[dataKey] / allValueCounts;
        });

        let label: any = ({ name, value, percent }: PieLabelRenderProps) => {
          const lastValue = lastFormatter(value);

          if ((rest.label as unknown as string) === 'percent') {
            return `${((percent as number) * 100).toFixed(percentPrecision)}%`;
          }

          if ((rest.label as unknown as string) === 'name') {
            return name;
          }

          if ((rest.label as unknown as string) === 'value') {
            return lastValue;
          }

          // return `${name}: ${lastValue} (${((percent as number) * 100).toFixed(percentPrecision)}%)`;
          return `${name} (${((percent as number) * 100).toFixed(percentPrecision)}%)`;
        };

        if (rest.label === false || !showLabel) {
          label = false;
        }

        return (
          <RechartPie
            outerRadius={outerRadius}
            innerRadius={innerRadius}
            key={index.toString()}
            fill={lastColors[index]}
            {...(rest as any)}
            dataKey={dataKey}
            data={chartData}
            label={label}
            animationDuration={500}
            isAnimationActive={false}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={lastColors[index]} />
            ))}
          </RechartPie>
        );
      })}
    </RPieChart>
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
};
PieChart.displayName = 'PieChart';

PieChart.defaultProps = {
  useResponsiveContainer: true,
  height: 300,
  showLabel: true,
  valuePrecision: 2,
  percentPrecision: 2,
};

export default PieChart;
