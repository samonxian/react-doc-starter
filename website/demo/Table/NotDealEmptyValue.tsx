import React from 'react';
import { Table } from 'react-antd-business-components';

const Default = function () {
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: null,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
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
      sorter: true,
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return <Table dataSource={dataSource} columns={columns} emptyFieldValue="----" />;
};
export default Default;
