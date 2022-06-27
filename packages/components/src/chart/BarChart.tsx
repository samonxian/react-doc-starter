import React from 'react';
import Variety, { VarietyChartProps } from './VarietyChart';

const Bar: {
  (props: VarietyChartProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: VarietyChartProps) => <Variety {...props} type="bar" />;

Bar.displayName = 'Bar';

export default Bar;
