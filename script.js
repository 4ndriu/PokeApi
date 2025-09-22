let clues = {
  1: "El sospechoso A tiene una coartada sólida, pero fue visto cerca de la escena del crimen.",
  2: "El sospechoso B tiene antecedentes criminales y estaba en la ciudad el día del robo.",
  3: "La escena del crimen tiene huellas dactilares que coinciden con el sospechoso C.",
};

let correctAnswer = 'B';  // El culpable es el sospechoso B
let revealedClues = 0;

function revealClue(clueNumber) {
  if (clues[clueNumber]) {
    const caseText = document.getElementById('case-text');
    caseText.textContent = clues[clueNumber];
    revealedClues++;

    if (revealedClues === 3) {
      document.querySelector('.culpable').style.display = 'block';
    }
  }
}

function guess(suspect) {
  const resultText = document.getElementById('result-text');
  if (suspect === correctAnswer) {
    resultText.textContent = "¡Correcto! El sospechoso " + suspect + " es el culpable.";
  } else {
    resultText.textContent = "¡Incorrecto! El sospechoso " + suspect + " no es el culpable.";
  }
  document.querySelector('.result').style.display = 'block';
}

function restartGame() {
  revealedClues = 0;
  document.querySelector('.result').style.display = 'none';
  document.querySelector('.culpable').style.display = 'none';
  document.getElementById('case-text').textContent = "Hay un robo en la ciudad. La policía ha identificado a varios sospechosos, pero aún no hay evidencia suficiente. ¡Encuentra la pista clave!";
}
