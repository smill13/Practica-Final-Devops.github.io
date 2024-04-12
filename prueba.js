function getColorCuadro() {
    const cuadro = document.getElementById('cuadro');
    const estiloCuadro = getComputedStyle(cuadro);
    return estiloCuadro.getPropertyValue('background-color');
  }
  
  module.exports = getColorCuadro;
  