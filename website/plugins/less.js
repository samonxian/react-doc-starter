const decamelize = require('decamelize');

module.exports = function (_, opt = {}) {
  delete opt.id;

  const options = {
    ...opt,
    lessOptions: {
      javascriptEnabled: true,
      ...opt.lessOptions,
    },
  };

  return {
    name: 'docusaurus-plugin-less',
    configureWebpack(_, isServer, utils) {
      const { getStyleLoaders } = utils;
      const isProd = process.env.NODE_ENV === 'production';
      return {
        module: {
          rules: [
            {
              test: /\.less$/,
              oneOf: [
                {
                  test: /\.module\.less$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        mode: 'local',
                        getLocalIdent: (context, _, localName) => {
                          const match = context.resourcePath
                            .replace(/\\/, '/')
                            .match(/.*\/src\/(.*)\/(.*)\.module\..*/);

                          if (match) {
                            let prefixName = match[1].replace(/\//g, '-');
                            if (match[2] !== 'index') {
                              prefixName += `-${match[2]}`;
                            }
                            return `rbac-${decamelize(prefixName, '-')}__${localName}`;
                          }

                          return `rabc-${localName}`;
                        },
                        exportLocalsConvention: 'camelCase',
                      },
                      importLoaders: 1,
                      sourceMap: !isProd,
                    }),
                    {
                      loader: 'less-loader',
                      options,
                    },
                  ],
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: 'less-loader',
                      options,
                    },
                  ],
                },
              ],
            },
          ],
        },
      };
    },
  };
};
