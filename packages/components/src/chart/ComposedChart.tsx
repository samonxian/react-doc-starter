import React from 'react';
import Variety, { VarietyChartProps } from './VarietyChart';

const ComposedChart: {
  (props: VarietyChartProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: VarietyChartProps) => <Variety {...props} type="composed" />;

ComposedChart.displayName = 'ComposedChart';

export default ComposedChart;
