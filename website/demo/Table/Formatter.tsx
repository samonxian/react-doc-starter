import React from 'react';
import { Table } from 'react-antd-business-components';
import moment from 'moment';

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
      address: '西湖区湖底公园1号',
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
      formatter(value) {
        return moment(value * 1000).format('YYYY-MM-DD');
      },
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
