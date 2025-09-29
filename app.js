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
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj-Mahal-2012.JPG"
  },
  {
    nombre: "Chichén Itzá",
    pais: "México",
    dato: "Centro ceremonial maya con la famosa pirámide de Kukulkán.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_2018.jpg"
  },
  {
    nombre: "Coliseo Romano",
    pais: "Italia",
    dato: "Anfiteatro construido en el siglo I d.C., símbolo del Imperio Romano.",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Colosseo_2020.jpg"
  },
  {
    nombre: "Cristo Redentor",
    pais: "Brasil",
    dato: "Estatua de 30 metros inaugurada en 1931 en Río de Janeiro.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg"
  },
  {
    nombre: "Gran Muralla China",
    pais: "China",
    dato: "Construida entre los siglos V a.C. y XVI para proteger el imperio.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg"
  },
  {
    nombre: "Petra",
    pais: "Jordania",
    dato: "Ciudad nabatea tallada en piedra rosa, fundada alrededor del siglo V a.C.",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Al_Khazneh_Petra_edit_2.jpg"
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
