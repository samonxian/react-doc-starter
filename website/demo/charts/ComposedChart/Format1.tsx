import React from 'react';
import { ComposedChart } from 'react-antd-business-components';
import type { ChartData } from 'react-antd-business-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const data: ChartData = {
    dataKeys: [
      {
        dataKey: 'uv',
        name: '独立IP浏览量',
        chartType: 'line',
      },
      {
        dataKey: 'pv',
        name: '页面浏览量',
        chartType: 'area',
      },
      {
        dataKey: 'amt',
        name: '总浏览量',
        chartType: 'bar',
      },
    ],
    chartData: [
      {
        name: '1584316800',
        uv: 1291694347209,
        pv: 2733318374428,
        amt: 573797153286,
      },
      {
        name: '1514316800',
        uv: 2610519704453,
        pv: 3904387600474,
        amt: 728922099495,
      },
      {
        name: '1554316800',
        uv: 3608171592426,
        pv: 240500160908,
        amt: 2030310348557,
      },
    ],
  };
  return <ComposedChart data={data} type="line" xAxisFormat="date(YYYY-MM-DD)" yAxisFormat="rmb(2)" height={300} />;
};
