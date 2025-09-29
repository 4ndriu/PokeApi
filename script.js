const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Firework {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
    const colors = ["#ff0044","#ffaa00","#00ffcc","#44ff00","#0099ff","#cc00ff"];
    this.color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < 60; i++) {
      const angle = (Math.PI * 2 * i) / 60;
      const speed = Math.random() * 4 + 2;
      this.particles.push({
        x: this.x,
        y: this.y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1
      });
    }
  }

  update() {
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05; // gravedad ligera
      p.alpha -= 0.01;
    });
    this.particles = this.particles.filter(p => p.alpha > 0);
  }

  draw() {
    this.particles.forEach(p => {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }
}

let fireworks = [];

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    if (fw.particles.length === 0) {
      fireworks.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", e => {
  fireworks.push(new Firework(e.clientX, e.clientY));
});

// arranque automático
setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  fireworks.push(new Firework(x, y));
}, 2000);

animate();

