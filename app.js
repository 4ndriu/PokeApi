const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
const info = document.getElementById("info");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  placePlanets();
  drawPlanets();
}
window.addEventListener("resize", resize);
resize();

let planets = [];

function placePlanets() {
  planets = [
    {
      x: canvas.width * 0.3,
      y: canvas.height * 0.4,
      r: 20,
      color: "red",
      name: "Marte",
      data: "Marte es conocido como el planeta rojo."
    },
    {
      x: canvas.width * 0.6,
      y: canvas.height * 0.6,
      r: 25,
      color: "orange",
      name: "Venus",
      data: "Venus es el planeta más caliente del sistema solar."
    },
    {
      x: canvas.width * 0.8,
      y: canvas.height * 0.3,
      r: 35,
      color: "brown",
      name: "Júpiter",
      data: "Júpiter es el planeta más grande del sistema solar."
    }
  ];
}

function drawPlanets() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  planets.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  });
}

canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  let found = null;
  planets.forEach(p => {
    const dx = x - p.x;
    const dy = y - p.y;
    if (Math.sqrt(dx * dx + dy * dy) < p.r) {
      found = `${p.name}: ${p.data}`;
    }
  });

  if (found) {
    info.textContent = "🪐 " + found;
  } else {
    info.textContent = "🪐 Toca un planeta para ver información breve";
  }
});

