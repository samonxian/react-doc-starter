import React from 'react';
import { Card } from 'antd';
import { ProContent, Space } from 'react-antd-business-components';

const Default = function () {
  return (
    <div style={{ background: '#eee', padding: 16 }}>
      <Space direction="vertical">
        <Card title="直接展示内容">
          <ProContent>内容区域</ProContent>
        </Card>
        <Card title="展示搜索提示">
          <ProContent showSearchTip>内容区域</ProContent>
        </Card>
        <Card title="展示无数据提示">
          <ProContent showNoDataTip>内容区域</ProContent>
        </Card>
        <Card title="展示成功提示">
          <ProContent showSuccessTip>内容区域</ProContent>
        </Card>
        <Card title="展示警告提示">
          <ProContent showWarnTip>内容区域</ProContent>
        </Card>
        <Card title="展示错误提示">
          <ProContent showErrorTip>内容区域</ProContent>
        </Card>
      </Space>
    </div>
  );
};

export default Default;
