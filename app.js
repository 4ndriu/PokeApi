const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Star {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.alpha = Math.random();
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
    ctx.fill();
  }
}

let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push(new Star(Math.random() * canvas.width,
                      Math.random() * canvas.height,
                      Math.random() * 2 + 1,
                      Math.random() * 1 + 0.5));
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    star.update();
    star.draw();
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", e => {
  // Crear estrella "especial" en la posición del toque
  stars.push(new Star(e.clientX, e.clientY, 3, 1));
});

animate();
