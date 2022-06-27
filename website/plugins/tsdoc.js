module.exports = function (context, opt = {}) {
  return {
    name: 'docusaurus-plugin-tsdoc',
    configureWebpack(config) {
      const { siteDir } = context;

      return {
        module: {
          rules: [
            {
              test: /(\.mdx?)$/,
              include: [siteDir],
              use: [
                {
                  loader: require.resolve('ts-doc-webpack-loader'),
                  options: { alias: config.resolve.alias, ...opt },
                },
              ],
            },
          ],
        },
      };
    },
  };
};
