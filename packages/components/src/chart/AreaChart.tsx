import React from 'react';

import Variety, { VarietyChartProps } from './VarietyChart';

const Area: {
  (props: VarietyChartProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: VarietyChartProps) => <Variety {...props} type="area" />;
Area.displayName = 'Area';

export default Area;
