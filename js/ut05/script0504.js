let puntuacion = document.querySelector('#puntuacion');
let tablero = document.querySelector('#tablero');
let puntos = 0; // Variable globar para los puntos
puntuacion.textContent = puntos; // Escribe la puntuación en la página
// Obtiene el alto y ancho de la pantalla
let height = window.innerHeight;
let width = window.innerWidth;

showRectangle(); // Muestra un rectángulo por pantalla

function showRectangle() {
    tablero.textContent = ""; // Vacía el tablero (la pantalla)
    let rectangulo = document.createElement('div');
    rectangulo.classList.add('rectangulo');

    // Posiciona el rectángulo en una posición aleatoria de la pantalla
    rectangulo.style.top = `${ rnd(height, 1) }px`;
    rectangulo.style.left = `${ rnd(width, 1) }px`;
    // Redimensiona el rectángulo con valores aleatorios entre 50 y 70
    rectangulo.style.width = `${ rnd(70, 50) }em`;
    rectangulo.style.height = `${ rnd(70, 50) }em`;

    tablero.append(rectangulo);

    // Almacena los valores de la ventana cuando esta se redimensiona
    window.addEventListener('resize', () => {
        height = window.innerHeight;
        width = window.innerWidth;
    } );
    rectangulo.addEventListener('click', (e) => {
        puntuacion.textContent = "";
        puntos++;
        puntuacion.textContent = puntos;
        showRectangle(); // Vuelve a llamar a la función para mostrar otro rectángulo
    } );

}

// Función que calcula números aleatorios entre dos parámetros
function rnd(max, min) {
    return Math.trunc(Math.random() * (max - min) + 1); // Devuelve un número entre min y max
}
