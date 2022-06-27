# ReactAntdBusinessComponents

直接运行下方命令，即可打包生成。

```shell
$ npm run build
```

pacakge 的一些配置如下：

```json
{
  "version": "0.0.0",
  "name": "react-antd-business-components",
  "main": "lib/index.js",
  "module": "es/index.js",
  "files": ["dist", "lib", "es"]
}
```

支持 webpack 和 vite 的 es 模式，同时支持 umd 格式，打包在 dist 文件夹中。
umd 模式配置需要留意 vite.config.ts 文件的 EXTERNAL 和 GLOBAL 配置。
