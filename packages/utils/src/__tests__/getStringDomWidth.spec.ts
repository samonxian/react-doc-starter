import { describe, it, expect } from 'vitest';
import getStringDOMWidth from '../getStringDOMWidth';

function checkStringWidth(str: string, noReplaceWithOne = true) {
  if (!noReplaceWithOne) {
    // eslint-disable-next-line no-param-reassign
    str = str.replace(/1/g, '0');
  }

  const dom = document.createElement('span');

  dom.innerHTML = str;
  dom.style.position = 'absolute';
  document.body.appendChild(dom);

  expect(getStringDOMWidth(str, { noReplaceWithOne })).toBe(dom.clientWidth);
}

describe('getStringDomWidth', () => {
  it('returns the correct with.', () => {
    checkStringWidth('123456');
    checkStringWidth('123456', false);
    checkStringWidth('123456test');
    checkStringWidth('123456test', false);
    checkStringWidth('13测试');
  });
});
