import { describe, it, expect } from 'vitest';
import createFullscreen from '../createFullscreen';

describe('createFullscreen', () => {
  const targetDOM = document.body;
  it('return the correct properties.', () => {
    const fullscreenObj = createFullscreen(targetDOM, targetDOM.ownerDocument);
    expect(fullscreenObj.requestFullscreen).toBeInstanceOf(Function);
    expect(fullscreenObj.exitFullscreen).toBeInstanceOf(Function);
    // fullscreenObj.fullscreenElement 是 getter 目前无法判断
    expect(fullscreenObj.remove).toBeInstanceOf(Function);
    expect(fullscreenObj.events).toEqual([
      'fullscreenchange',
      'webkitfullscreenchange',
      'mozfullscreenchange',
      'MSFullscreenChange',
    ]);
  });
});
