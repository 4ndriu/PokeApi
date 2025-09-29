const planetsInfo = {
  mercury: {
    name: "Mercurio",
    desc: "El planeta más cercano al Sol, pequeño y rocoso."
  },
  venus: {
    name: "Venus",
    desc: "Conocido como el planeta más caliente, con una atmósfera densa."
  },
  earth: {
    name: "Tierra",
    desc: "Nuestro hogar, el único planeta conocido con vida."
  },
  mars: {
    name: "Marte",
    desc: "El planeta rojo, con montañas y cañones gigantes."
  }
};

const nameEl = document.getElementById("planet-name");
const descEl = document.getElementById("planet-desc");

document.querySelectorAll(".planet").forEach(planet => {
  planet.addEventListener("click", () => {
    const id = planet.classList[1]; // segundo nombre de clase
    nameEl.textContent = planetsInfo[id].name;
    descEl.textContent = planetsInfo[id].desc;
  });
});

