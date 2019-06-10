const dots = {};
let idCtr = 0;
let lastTime = getSystemMillis();

class Dot {
  constructor(id, x, y, dirX, dirY, speed, color, size) {
    this.x = x;
    this.y = y;
    this.dirX = dirX;
    this.dirY = dirY;
    this.speed = speed;
    this.id = id;
    this.color = color;
    this.size = size;
  }

  update(dt) {
    this.x += this.dirX * this.speed * dt;
    this.y += this.dirY * this.speed * dt;

    if(this.x < 0 || this.x > canvas.width) {
      delete dots[this.id];
    }

    if(this.y < 0 || this.y > canvas.height) {
      delete dots[this.id];
    }
  }
}

function update() {
  let now = getSystemMillis();
  let dt = now - lastTime;
  lastTime = now;

  if(dt < 0) dt = 0;

  clearCanvas();
  ctx.font = "30px Arial";
  ctx.fillText("Click in this rectangle", 10, 50);
  for(let i = 0; i < idCtr; i++) {
    if(dots[i]) {
      ctx.beginPath();
      ctx.arc(dots[i].x, dots[i].y, dots[i].size, 0, 2 * Math.PI);
      // ctx.stroke();
      ctx.fillStyle = dots[i].color;
      ctx.fill();
      dots[i].update(dt);
    }
  }
}

setInterval(update, 10);

document.addEventListener("mousedown", function(e) {
  if(e.offsetX > canvas.width || e.offsetY > canvas.height) return;

  for(let i = 0; i < randInt(100); i++) {
    const id = idCtr;
    idCtr += 1;
    console.log(id);

    const dirX = Math.random() - Math.random();
    const dirY = Math.random() - Math.random();
    const color = `rgb(${randInt(256)}, ${randInt(256)}, ${randInt(256)})`
    const speed = Math.random();
    const size = randInt(50);

    dots[id] = new Dot(id, e.offsetX, e.offsetY, dirX, dirY, speed, color, size);
  }
});
