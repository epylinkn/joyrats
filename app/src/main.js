import './styles/base.scss';

console.log("main.bundle.js");

$ = window.jQuery

const ws = new WebSocket("wss://www.joyrats.com");

ws.onopen = function () {
  console.log('connection opened');
};

ws.onmessage = function (evt) {
  console.log(evt.data);
  var input = parseInt(evt.data);
  $(".rotations").html(input);
};
