// prueba.js
const assert = require('assert');

// Esta función comprueba el color del cuadro
function comprobarColorCuadro() {
    const cuadro = document.getElementById('cuadro');
    const color = window.getComputedStyle(cuadro).getPropertyValue('background-color');
    return color === 'rgb(0, 0, 255)';
}

// Prueba unitaria
try {
    assert.strictEqual(comprobarColorCuadro(), true, 'El color del cuadro no es azul');
    console.log('Prueba pasada exitosamente');
} catch (error) {
    console.error('Error en la prueba:', error.message);
    process.exit(1);
}
