function revealInfo() {
  const text = document.querySelector('.text');
  const button = document.querySelector('button');

  // Revela información secreta
  text.textContent = 'Información adicional: La investigación está relacionada con un posible ciberataque a nivel global. Las pruebas aún están bajo análisis, pero se ha identificado una IP sospechosa. Manténgase atento a nuevas actualizaciones.';
  button.style.display = 'none';
}
