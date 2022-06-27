import React from 'react';
import { Space, SpaceProps } from 'antd';

/**
 * 基于 antd 适配为 sec 的格式
 */
const RSpace: {
  (props: SpaceProps): JSX.Element;
  defaultProps?: Record<string, any>;
  displayName: string;
} = (props: SpaceProps) => {
  const { children, direction } = props;
  let { style = {} } = props;

  if (direction === 'vertical') {
    style = { ...style, width: '100%', display: 'flex' };
  }

  return (
    <Space {...props} direction={direction} style={style}>
      {children}
    </Space>
  );
};

RSpace.displayName = 'RSpace';

export default RSpace;
