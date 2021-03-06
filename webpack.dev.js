const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const path = require('path');
const TohoLogPlugin = require('toho-log-plugin');
const {
  commonModule,
  commonPlugin,
  resolveModule,
} = require('./webpack.common');

let plugins = commonPlugin;

plugins.push(new TohoLogPlugin({ defaultWords: true, isPray: false }));

const devServerOptions = {
  port: 9099,
  host: 'localhost',
  noInfo: true,
  clientLogLevel: 'error',
  contentBase: path.join(__dirname, 'src'),
};

const webpackConfig = {
  mode: 'development',
  watch: false,
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://' +
      devServerOptions.host +
      ':' +
      devServerOptions.port,
    // 'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/index.tsx'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: 'vendor/[name].[chunkHash:8].js',
  },
  plugins,
  module: commonModule,
  resolve: resolveModule,
};

const compiler = webpack(webpackConfig);

const server = new webpackDevServer(compiler, devServerOptions);

server.listen(devServerOptions.port, devServerOptions.host);
