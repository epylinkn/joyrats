const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../app/index.html'),
    inject: 'body',
    filename: 'index.html',
    chunks: ['main']
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../app/knob.html'),
    inject: 'body',
    filename: 'knob.html',
    chunks: ['knob']
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../app/arkanoid.html'),
    inject: 'body',
    filename: 'arkanoid.html',
    chunks: ['arkanoid']
  }),
];

module.exports = plugins;
