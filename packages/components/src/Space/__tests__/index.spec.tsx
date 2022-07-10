import { expect, it } from 'vitest';
import React from 'react';
import renderer from 'react-test-renderer';
import Space from '../index';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

it('Space rendered', () => {
  const component = renderer.create(
    <Space>
      <div>1</div>
      <div>2</div>
    </Space>,
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
