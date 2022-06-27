/* eslint-disable no-plusplus */
interface ElementContext extends HTMLElement {
  mozRequestFullScreen?(): Promise<void>;
  webkitRequestFullscreen?(): Promise<void>;
  msRequestFullscreen?(): Promise<void>;
}
interface DocumentContext extends Document {
  webkitCurrentFullScreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
  webkitExitFullscreen?(): Promise<void>;
  webkitCancelFullScreen?(): Promise<void>;
  mozCancelFullScreen?(): Promise<void>;
  msExitFullscreen?(): Promise<void>;
}

/**
 * 需要兼容不同浏览器的 events
 */
const DOCUMENT_FULLSCREEN_EVENTS = [
  'fullscreenchange',
  'webkitfullscreenchange',
  'mozfullscreenchange',
  'MSFullscreenChange',
];

/**
 * 创建全屏事件，兼容各大浏览器，如果使用 React 组件，建议使用 useFullScreen Hook。
 *
 * @param elementContext 全屏目标 dom 对象
 * @param documentContext document 对象
 * @param changeCallback? 全屏状态回调函数，无参数。
 * @returns
 * ```ts
 *  {
 *     readonly isDomFullscreenSupported: boolean; // 是否支持全屏
 *     requestFullscreen(): void; // 触发全屏
 *     exitFullscreen(): void; // 退出全屏
 *     readonly fullscreenElement: Element | null | undefined; // 当前正在全部的 dom 元素，一般用来不判断是否在全屏状态
 *     remove(): void; // 移除 fullscreen 监听器
 *   }
 * ```
 * @example
 * **最好每次都绑定前，移除上次的全屏绑定事件，防止事件没移除，导致多次绑定。**
 * 当然也可以通过组件销毁钩子进行移除事件。
 * ```js
 * const fullscreenObj = createFullscreen(
 *   targetDOM,
 *   targetDOM.ownerDocument || document,
 *   () => {
 *     const isFull = !!fullscreenObj.fullscreenElement;
 *     if (!isFull) {
 *       //非全屏，移除监听器。
 *        fullscreenObj.remove();
 *     }
 *   }
 * );
 *
 * if (fullscreenObj.isDomFullscreenSupported) {
 *   const isFull = !!fullscreenObj.fullscreenElement;
 *   if (!isFull) {
 *     fullscreenObj.requestFullscreen();
 *   } else {
 *     fullscreenObj.exitFullscreen();
 *   }
 * } else {
 *   // 异常处理
 * }
 * ```
 */
export default function createFullscreen(
  elementContext: ElementContext,
  documentContext: DocumentContext,
  changeCallback = () => {},
) {
  const requestFullscreen =
    elementContext.requestFullscreen ||
    elementContext.webkitRequestFullscreen ||
    elementContext.mozRequestFullScreen ||
    elementContext.msRequestFullscreen;

  const exitFullscreen =
    documentContext.exitFullscreen ||
    documentContext.webkitExitFullscreen ||
    documentContext.webkitCancelFullScreen ||
    documentContext.mozCancelFullScreen ||
    documentContext.msExitFullscreen;

  const isDomFullscreenSupported = !!requestFullscreen;

  for (let i = DOCUMENT_FULLSCREEN_EVENTS.length; i--; ) {
    documentContext.addEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], changeCallback);
  }

  return {
    events: DOCUMENT_FULLSCREEN_EVENTS,
    get isDomFullscreenSupported() {
      return isDomFullscreenSupported;
    },
    requestFullscreen() {
      if (!isDomFullscreenSupported) {
        console.error('浏览器不支持全屏操作。');
      }
      requestFullscreen.apply(elementContext);
    },
    exitFullscreen() {
      if (isDomFullscreenSupported) {
        exitFullscreen.apply(documentContext);
      }
    },
    get fullscreenElement() {
      return (
        documentContext.fullscreenElement ||
        documentContext.webkitCurrentFullScreenElement ||
        documentContext.mozFullScreenElement ||
        documentContext.msFullscreenElement
      );
    },
    remove() {
      for (let i = DOCUMENT_FULLSCREEN_EVENTS.length; i--; ) {
        documentContext.removeEventListener(DOCUMENT_FULLSCREEN_EVENTS[i], changeCallback);
      }
    },
  };
}
