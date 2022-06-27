import React from 'react';
import { PieChart, PieChartDataSource } from 'react-antd-business-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const data: PieChartDataSource = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  return <PieChart data={data} height={300} outerRadius={60} />;
};
