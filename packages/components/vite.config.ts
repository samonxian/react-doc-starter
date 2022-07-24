/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import decamelize from 'decamelize';
import { buildPlugin } from 'vite-plugin-build';

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
    plugins: [
      react(),
      buildPlugin({
        libBuild: {
          buildOptions: {
            rollupOptions: {
              external: EXTERNAL,
              output: { globals: GLOBALS },
            },
            lib: {
              entry: path.resolve(__dirname, 'src/index.ts'),
              name: 'RbacComponents',
              fileName: (format) => `rbac-components.${format}.js`,
            },
          },
        },
      }),
    ],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: (name: string, filename: string) => {
          const match = filename.replace(/\\/, '/').match(/.*\/src\/(.*)\/(.*)\.module\..*/);

          if (match) {
            let prefixName = match[1].replace(/\//g, '-');
            if (match[2] !== 'index') {
              prefixName += `-${match[2]}`;
            }
            return `rabc-${decamelize(prefixName, '-')}__${name}`;
          }

          return `rabc-${name}`;
        },
      },
      postcss: {},
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [
        // fix less import by: @import ~
        // less import no support webpack alias '~' · Issue #2185 · vitejs/vite
        { find: /^~/, replacement: '' },
      ],
    },
    test: {
      environment: 'happy-dom',
      watch: false,
    },
  };
});
