import { defineConfig } from 'vite';
import path from 'path';
import { commonConfig } from './vite.config';

// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
export const GLOBALS = {
  camelcase: 'Camelcase',
  moment: 'Moment',
};
// 处理类库使用到的外部依赖
// 确保外部化处理那些你不想打包进库的依赖
export const EXTERNAL = ['camelcase', 'moment'];

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
        name: 'BusinessUtils',
        fileName: (format) => `business-utils.${format}.js`,
      },
      minify: true,
    },
  };
});
