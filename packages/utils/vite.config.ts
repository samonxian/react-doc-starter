import { defineConfig, UserConfig } from 'vite';
import path from 'path';

// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
export const GLOBALS = {
  camelcase: 'Camelcase',
};
// 确保外部化处理那些你不想打包进库的依赖
export const EXTERNAL = ['camelcase'];

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
        exports: 'named',
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
        globals: GLOBALS,
      },
      {
        indent: false,
        dir: 'lib',
        exports: 'named',
        format: 'cjs',
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
    css: {
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
        name: 'BusinessUtils', // 这里设置只有在 UMD 格式才有效，避免验证报错才设置的，在这里没用
        fileName: (format) => `business-utils.${format}.js`,
      },
      rollupOptions,
    },
  };
});
