import './styles/base.scss';

console.log("main.bundle.js");

$ = window.jQuery

const ws = new WebSocket("wss://www.joyrats.com");

ws.onopen = function () {
  console.log('connection opened');
};


ws.onmessage = function (evt) {
  console.log(evt.data);
  var input = parseInt(parseInt(evt.data) / 40);
  var cleanValue = clamp(input);

  $(".rotations").html(cleanValue);
};

function clamp(val) {
  return Math.max(0, Math.min(1000, val));
}
