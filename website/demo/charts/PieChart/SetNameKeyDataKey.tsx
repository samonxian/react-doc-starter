import React from 'react';
import { PieChart, PieChartProps } from 'react-antd-business-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const data: PieChartProps['data'] = {
    dataKey: 'badcaseCost',
    label: true,
    nameKey: 'badcasetype',
    chartData: [
      {
        badcasetype: '小样本',
        badcaseAdNum: 3959.5061753970003,
        badcaseImp: 1986.759419469,
        badcaseCost: 2863.5641501245536,
      },
      {
        badcasetype: '新广告',
        badcaseAdNum: 2902.829112675,
        badcaseImp: 1808.219785075,
        badcaseCost: 2727.3048648120844,
      },
      {
        badcasetype: '矫正异常',
        badcaseAdNum: 2524.1903406009997,
        badcaseImp: 2103.777411631,
        badcaseCost: 1878.1476906503897,
      },
    ],
  };
  return <PieChart data={data} height={300} />;
};
