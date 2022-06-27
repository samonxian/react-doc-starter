import React from 'react';
import { Empty, Alert } from 'antd';

export interface ProContentProps {
  /**
   * 是否展示搜索提示语
   */
  showSearchTip?: boolean;
  /**
   * 搜索提示语
   */
  searchTip?: string;
  /**
   * 是否展示空数据提示语
   */
  showNoDataTip?: boolean;
  /**
   * 空数据提示语
   */
  noDataTip?: string;
  /**
   * 是否展示警告提示语
   */
  showWarnTip?: boolean;
  /**
   * 警告提示语
   */
  warnTip?: string;
  /**
   * 是否展示错误提示语
   */
  showErrorTip?: boolean;
  /**
   * 错误提示语
   */
  errorTip?: string;
  /**
   * 是否展示成功提示语
   */
  showSuccessTip?: boolean;
  /**
   * 成功提示语
   */
  successTip?: string;
  children: React.ReactNode;
}
/**
 * 内容组件，包含搜索提示、空数据提示、错误提示，如果这些其中一个设置了，子组件内容不会被渲染
 * 提示优先级
 * 错误提示 > 警告提示 > 成功提示 > 无数据提示 > 查询提示
 */
const ProContent: {
  (props: ProContentProps): JSX.Element | null;
  displayName: string;
  defaultProps?: Record<string, any>;
} = (props: ProContentProps) => {
  const {
    showSearchTip,
    searchTip,
    showNoDataTip,
    noDataTip,
    showWarnTip,
    warnTip,
    showErrorTip,
    errorTip,
    showSuccessTip,
    successTip,
  } = props;

  if (showErrorTip) {
    return <Alert type="error" message={errorTip} showIcon />;
  }

  if (showWarnTip) {
    return <Alert type="warning" message={warnTip} showIcon />;
  }

  if (showSuccessTip) {
    return <Alert type="success" message={successTip} showIcon />;
  }

  if (showNoDataTip) {
    // return <Alert type="info" message={noDataTip} showIcon />;
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={noDataTip} />;
  }

  if (showSearchTip) {
    return <Alert type="info" message={searchTip} showIcon />;
  }

  return <>{props.children}</>;
};

ProContent.displayName = 'ProContent';

ProContent.defaultProps = {
  searchTip: '请在上方输入然后点击查询',
  noDataTip: '暂无数据',
  successTip: '成功提示',
  warnTip: '警告提示',
  errorTip: '错误提示',
};

export default ProContent;
