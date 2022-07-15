const path = require('path');

module.exports = function () {
  return {
    name: 'alias-docusaurus-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            'react-antd-business-components/lib': path.resolve(__dirname, '../../packages/components/src'),
            'react-antd-business-components': path.resolve(__dirname, '../../packages/components/src'),
            'business-utils/lib': path.resolve(__dirname, '../../packages/utils/src'),
            'business-utils': path.resolve(__dirname, '../../packages/utils/src'),
            $components: path.resolve(__dirname, '../../packages/components/src'), // 用于缩短文档路径
            $demo: path.resolve(__dirname, '../demo'), // 用于缩短文档路径
            $utils: path.resolve(__dirname, '../../packages/utils/src'), // 用于缩短文档路径
          },
        },
      };
    },
  };
};
