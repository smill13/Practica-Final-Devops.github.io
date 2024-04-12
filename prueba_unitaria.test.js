// prueba_unitaria.test.js
const { JSDOM } = require('jsdom');
const assert = require('assert');

// Esta función comprueba el color del cuadro
function comprobarColorCuadro() {
    const cuadro = document.getElementById('cuadro');
    const color = window.getComputedStyle(cuadro).getPropertyValue('background-color');
    return color === 'rgb(0, 0, 255)';
}

describe('Prueba de color de cuadro', () => {
    it('El color del cuadro debe ser azul', () => {
        const dom = new JSDOM(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Prueba de Color de Cuadro</title>
                <style>
                    #cuadro {
                        width: 100px;
                        height: 100px;
                        background-color: blue;
                    }
                </style>
            </head>
            <body>
                <div id="cuadro"></div>
            </body>
            </html>
        `);

        global.document = dom.window.document;
        global.window = dom.window;

        assert.strictEqual(comprobarColorCuadro(), true, 'El color del cuadro no es azul');
    });
});
