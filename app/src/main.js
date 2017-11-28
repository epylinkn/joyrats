import './styles/base.scss';

console.info('Tada! It works. Now build something awesome.');

// TODO: WTF WHY IS THIS BROKEN???
// const WebSocket = require('ws');

const ws = new WebSocket(process.env.WEBSOCKET);

ws.onopen = function () {
  console.log('connection opened');
};

ws.onmessage = function (evt) {
  console.log(evt.data);
};
