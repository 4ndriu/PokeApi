const canvas = document.getElementById("garden");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.maxSize = Math.random() * 20 + 15;
    this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
    this.growth = 0.2;
  }

  update() {
    if (this.size < this.maxSize) {
      this.size += this.growth;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);

    // pétalos
    for (let i = 0; i < 6; i++) {
      ctx.rotate(Math.PI / 3);
      ctx.beginPath();
      ctx.arc(0, this.size, this.size / 2, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    // centro
    ctx.beginPath();
    ctx.arc(0, 0, this.size / 3, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();

    ctx.restore();
  }
}

let flowers = [];

function animate() {
  ctx.fillStyle = "rgba(0, 20, 0, 0.3)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  flowers.forEach(flower => {
    flower.update();
    flower.draw();
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", e => {
  flowers.push(new Flower(e.clientX, e.clientY));
});

animate();


  infoBox.textContent = "🌞 Toca un planeta para ver detalles";
});

animate();


