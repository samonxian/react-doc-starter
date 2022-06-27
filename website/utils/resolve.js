const resolve = require('resolve');

module.exports = function (path) {
  return resolve.sync(path, { extensions: ['.js', '.jsx', '.ts', '.tsx'] });
};
