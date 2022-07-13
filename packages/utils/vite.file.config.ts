import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: false,
      rollupOptions: {
        external: (id) => {
          if (id.includes('.less') || id.includes('.css') || id.includes('.svg')) {
            return false;
          }
          return true;
        },
        output: [
          {
            file: `es/${mode.replace(/\.[jt]?sx?$/, '.js')}`,
            indent: false,
            exports: 'named',
            format: 'es',
            dir: undefined,
          },
          {
            file: `lib/${mode.replace(/\.[jt]?sx?$/, '.js')}`,
            indent: false,
            exports: 'named',
            format: 'cjs',
            dir: undefined,
          },
        ],
      },
      lib: {
        // mode 特殊处理为文件名
        entry: path.resolve(__dirname, 'src', mode),
        name: 'noop', // 这里设置只有在 UMD 格式才有效，避免验证报错才设置的，在这里没用
      },
      minify: false,
    },
  };
});
