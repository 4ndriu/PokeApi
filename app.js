const canvas = document.getElementById("solar");
const ctx = canvas.getContext("2d");
const infoBox = document.getElementById("info");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

class Planet {
  constructor(name, radius, distance, speed, color, description) {
    this.name = name;
    this.radius = radius;
    this.distance = distance;
    this.speed = speed;
    this.angle = Math.random() * Math.PI * 2;
    this.color = color;
    this.description = description;
  }

  update() {
    this.angle += this.speed;
  }

  draw() {
    const x = canvas.width / 2 + Math.cos(this.angle) * this.distance;
    const y = canvas.height / 2 + Math.sin(this.angle) * this.distance;

    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    // Guardar la posición para interacción
    this.x = x;
    this.y = y;
  }

  isClicked(mx, my) {
    const dx = mx - this.x;
    const dy = my - this.y;
    return Math.sqrt(dx*dx + dy*dy) <= this.radius;
  }
}

// 🌞 Crear el sol y planetas
const planets = [
  new Planet("Mercurio", 4, 50, 0.02, "gray", "El planeta más cercano al Sol."),
  new Planet("Venus", 6, 90, 0.015, "orange", "El planeta más caliente."),
  new Planet("Tierra", 7, 130, 0.012, "blue", "Nuestro planeta hogar."),
  new Planet("Marte", 5, 170, 0.01, "red", "El planeta rojo."),
  new Planet("Júpiter", 12, 220, 0.006, "beige", "El planeta más grande."),
  new Planet("Saturno", 10, 280, 0.005, "khaki", "Famoso por sus anillos."),
  new Planet("Urano", 8, 340, 0.004, "lightblue", "Un gigante de hielo."),
  new Planet("Neptuno", 8, 390, 0.003, "blueviolet", "El planeta más lejano.")
];

function drawSun() {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, 20, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.shadowColor = "yellow";
  ctx.shadowBlur = 30;
  ctx.fill();
  ctx.shadowBlur = 0;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSun();

  planets.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  for (let planet of planets) {
    if (planet.isClicked(mx, my)) {
      infoBox.textContent = `🌍 ${planet.name}: ${planet.description}`;
      return;
    }
  }

  infoBox.textContent = "🌞 Toca un planeta para ver detalles";
});

animate();


