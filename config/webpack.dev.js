// `path` to get absolute paths from relative (required for webpack)
const path = require('path');
const rootDir = path.resolve(__dirname, '../');
module.exports = {
  entry: {
    main: path.resolve(rootDir, 'src/js/index.js'),
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'main.js',
    publicPath: '/',
    // `library` to expose your bundle to global or window object
    library: 'MyLibrary',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      // babel-loader for transpling ES6 to es2015
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  target: 'web',
  plugins: [],
  devtool: 'cheap-module-eval-source-map',
};
