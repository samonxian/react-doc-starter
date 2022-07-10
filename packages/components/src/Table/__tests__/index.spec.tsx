import { expect, it } from 'vitest';
import React from 'react';
import renderer from 'react-test-renderer';
import Table from '../index';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
  },
];

const data = [
  {
    id: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    id: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    id: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake ParkSidney No. 1 Lake Park',
    tags: ['cool', 'teacher', 'smart', 'long', 'short'],
  },
];

const Default = function () {
  return <Table columns={columns} dataSource={data} />;
};

export default Default;

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

it('ProContent rendered', () => {
  const component = renderer.create(<Table columns={columns} dataSource={data} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
