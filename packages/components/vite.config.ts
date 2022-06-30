import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import decamelize from 'decamelize';

// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
export const GLOBALS = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react/jsx-runtime': 'jsxRuntime',
  antd: 'Antd',
  classnames: 'Classnames',
  recharts: 'Recharts',
  'recharts-scale': 'RechartsScale',
  'business-utils': 'BusinessUtils',
};
// 确保外部化处理那些你不想打包进库的依赖
export const EXTERNAL = [
  'react/jsx-runtime',
  'react',
  'react-dom',
  'antd',
  'classnames',
  'recharts',
  'recharts-scale',
  'business-utils',
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let rollupOptions: UserConfig['build']['rollupOptions'] = {
    external: (id) => {
      if (id.includes('/node_modules/')) {
        return true;
      }
      if (EXTERNAL.includes(id)) {
        return true;
      }
      return false;
    },
    output: [
      {
        dir: 'es',
        indent: false,
        format: 'es',
        exports: 'named',
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: GLOBALS,
      },
      {
        indent: false,
        dir: 'lib',
        format: 'cjs',
        exports: 'named',
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: GLOBALS,
      },
    ],
  };

  if (mode.includes('lib')) {
    rollupOptions = {
      external: EXTERNAL,
      output: { globals: GLOBALS },
    };
  }

  return {
    plugins: [react()],
    css: {
      modules: {
        localsConvention: 'camelCaseOnly',
        generateScopedName: (name, filename) => {
          const match = filename.replace(/\\/, '/').match(/.*\/src\/(.*)\/.*\.module\..*/);

          if (match) {
            return `rabc-${decamelize(match[1], '-')}__${name}`;
          }

          return `rabc-${name}`;
        },
      },
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
    build: {
      emptyOutDir: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'RbacComponents', // 这里设置只有在 UMD 格式才有效，避免验证报错才设置的，在这里没用
        fileName: (format) => `rbac-components.${format}.js`,
      },
      rollupOptions,
    },
  };
});
