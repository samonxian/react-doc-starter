import React from 'react';
import { PieChart } from 'react-antd-business-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const data = [
    {
      outerRadius: 60,
      label: false,
      chartData: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ],
    },
    {
      innerRadius: 70,
      outerRadius: 90,
      chartData: [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
      ],
    },
  ];
  return <PieChart data={data} height={300} />;
};
