const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../app/index.html'),
    inject: 'body',
    filename: 'index.html',
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname, '/../app/knob.html'),
    inject: 'body',
    filename: 'knob.html',
  }),
];

module.exports = plugins;
