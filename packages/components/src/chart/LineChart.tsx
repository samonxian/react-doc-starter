import React from 'react';
import Variety, { VarietyChartProps } from './VarietyChart';

const LineChart: {
  (props: VarietyChartProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: VarietyChartProps) => <Variety {...props} type="line" />;

LineChart.displayName = 'LineChart';

export default LineChart;
