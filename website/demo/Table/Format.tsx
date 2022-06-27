import React from 'react';
import { Table } from 'react-antd-business-components';

const Default = function () {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      birthday: 1590686244,
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园2号',
      birthday: 1590676244,
    },
    {
      key: '3',
      name: '胡彦斌',
      age: 32,
      birthday: 1590666244,
    },
  ];
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      key: 'birthday',
      format: 'date(YYYY-MM-DD)',
      // 或者缩写
      // format: 'date',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Default;
