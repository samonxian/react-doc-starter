import { expect, it } from 'vitest';
import React from 'react';
import renderer from 'react-test-renderer';
import ProContent from '../index';

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  return result as renderer.ReactTestRendererJSON;
}

it('ProContent rendered', () => {
  const component = renderer.create(
    <>
      <ProContent>内容区域</ProContent>
      <ProContent showSearchTip>内容区域</ProContent>
      <ProContent showNoDataTip>内容区域</ProContent>
      <ProContent showSuccessTip>内容区域</ProContent>
      <ProContent showWarnTip>内容区域</ProContent>
      <ProContent showErrorTip>内容区域</ProContent>
    </>,
  );
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
