module.exports = function (context, opt = {}) {
  return {
    name: 'docusaurus-plugin-mdx',
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
                  loader: require.resolve('../loader/propsTable'),
                  options: { alias: config.resolve.alias, ...opt },
                },
                {
                  loader: require.resolve('../loader/codeShow'),
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
