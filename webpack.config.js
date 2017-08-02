const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const rootPath = path.resolve('.');

module.exports = {
  devtool: 'cheap-source-map',
  context: rootPath,
  entry: {
    bundle: 'es6/index',
    vendors: ['jquery']
  },
  output: {
    path: path.join(rootPath, 'assets'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors']
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
        unused: true,
        dead_code: true
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true,
        quote_style: 3
      }
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production', // use 'production' unless process.env.NODE_ENV is defined
      BROWSER: true
    }),
    new webpack.DefinePlugin({
      __DEV__: false,
      __DEV_TOOLS__: false
    }),
    new webpack.IgnorePlugin(/jsdom$/)
  ],
  resolve: {
    extensions: ['.js'],
    modules: [path.join(rootPath, 'assets'), 'node_modules']
  },
  target: 'web',
  performance: {
    hints: false
  },
  stats: {
    version: false,
    hash: false,
    chunks: false,
    children: false
  }
};
