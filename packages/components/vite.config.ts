import { defineConfig } from 'vite';
import path from 'path';
import { commonConfig } from './vite.file.config';

// 在 UMD 构建模式下为外部依赖提供一个全局变量
export const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  antd: 'Antd',
  classnames: 'Classnames',
  recharts: 'Recharts',
  'recharts-scale': 'RechartsScale',
  'business-utils': 'BusinessUtils',
};
// 处理类库使用到的外部依赖
// 确保外部化处理那些你不想打包进库的依赖
export const EXTERNAL = ['react', 'react-dom', 'antd', 'classnames', 'recharts', 'recharts-scale', 'business-utils'];

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    ...commonConfig,
    build: {
      emptyOutDir: false,
      rollupOptions: {
        external: EXTERNAL,
        output: { globals: GLOBALS },
      },
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'RbacComponents',
        fileName: (format) => `rbac-components.${format}.js`,
      },
      minify: true,
    },
  };
});
