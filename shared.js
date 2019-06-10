const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const keysPressed = {};

var mouseOverCanvas = false;

function fileLoaded(fileName) {
  console.log(fileName + " loaded");
}
fileLoaded("shared.js");

function addEventListener(event, func) {
  document.addEventListener(event, func);
}

function randInt(max) {
  return Math.floor(Math.random() * max);
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function keyList(obj) {
  const l = [];
  Object.keys(obj).forEach(function(key, index) {
    l.push(key);
  });

  return l;
}

function getSystemMillis() {
  return new Date().getMilliseconds();
}

addEventListener("keydown", function(e) {
  keysPressed[e.code] = true;
});

addEventListener("keyup", function(e) {
  keysPressed[e.code] = false;
});
