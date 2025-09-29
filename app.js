const maravillas = [
  {
    nombre: "Machu Picchu",
    pais: "Perú",
    dato: "Construida en el siglo XV, fue una ciudad inca en la cima de una montaña.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg"
  },
  {
    nombre: "Taj Mahal",
    pais: "India",
    dato: "Mausoleo del siglo XVII, símbolo del amor eterno de Shah Jahan hacia Mumtaz Mahal.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
  },
  {
    nombre: "Chichen Itzá",
    pais: "México",
    dato: "Centro ceremonial maya con la famosa pirámide de Kukulkán.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/92/Chichen_Itza_3.jpg"
  },
  {
    nombre: "Coliseo Romano",
    pais: "Italia",
    dato: "Anfiteatro construido en el siglo I d.C., símbolo del Imperio Romano.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/de/Colosseo_2020.jpg"
  }
];

const contenedor = document.getElementById("contenedor");

maravillas.forEach(m => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${m.img}" alt="${m.nombre}">
    <div class="card-content">
      <h2>${m.nombre}</h2>
      <p><strong>Ubicación:</strong> ${m.pais}</p>
      <p>${m.dato}</p>
    </div>
  `;

  contenedor.appendChild(card);
});
