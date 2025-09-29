const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.6;
}
resize();
window.addEventListener("resize", resize);

// Crear estrellas
const estrellas = [];
for (let i = 0; i < 100; i++) {
  estrellas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5
  });
}

function dibujar() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  for (let e of estrellas) {
    ctx.beginPath();
    ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
    ctx.fill();

    e.x += e.dx;
    e.y += e.dy;

    if (e.x < 0 || e.x > canvas.width) e.dx *= -1;
    if (e.y < 0 || e.y > canvas.height) e.dy *= -1;
  }

  requestAnimationFrame(dibujar);
}
dibujar();
