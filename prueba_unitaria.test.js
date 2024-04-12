const getColorCuadro = require('./prueba_unitaria');

test('El cuadro es azul', () => {
  expect(getColorCuadro()).toBe('rgb(0, 0, 255)');
});
