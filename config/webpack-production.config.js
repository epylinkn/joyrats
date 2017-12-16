const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: {
    main: path.join(__dirname, '../app/src/main.js'),
    arkanoid: path.join(__dirname, '../app/src/arkanoid.js'),
    knob: path.join(__dirname, '../app/src/knob.js'),
  },
});

module.exports = config;
