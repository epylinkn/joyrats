const path = require('path');
const webpack = require('webpack');
const sharedPlugins = require('./sharedPlugins');

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
];

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    hmd: 'webpack-hot-middleware/client?reload=true',
    main: path.join(__dirname, '../app/src/main.js'),
    arkanoid: path.join(__dirname, '../app/src/arkanoid.js'),
    knob: path.join(__dirname, '../app/src/knob.js'),
  },
  output: {
    path: path.join(__dirname, '/../dist/'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: plugins.concat(sharedPlugins),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.jsx$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['latest'],
          },
        }],
      }, {
        test: /\.scss/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.join(__dirname, '/../app/src/styles/')],
            },
          },
        ],
      }, {
        test: /\.json/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
};
