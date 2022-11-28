let tiempo = document.querySelector('#time');
let gameZone = document.querySelector('#game-zone');
let player = document.querySelector('#player-input');
let puntos = 0;
let contador = 0.0;
let tiempoIntervalo;
let height = window.innerHeight;
let width = window.innerWidth -350;
let maximoMinimo = dificultad();

let diff = document.querySelector('#diff');
diff.addEventListener('click', (e) => {
    if (e.target.classList.contains('diff-level')) {
        let levels = document.querySelectorAll('.diff-level');
        Array.from(levels).forEach( item => {
            item.classList.remove('selected');
        })
        e.target.classList.add('selected');
        maximoMinimo = dificultad();
    }
});

let reiniciar = document.querySelector('#btn-reset');
reiniciar.addEventListener('click', reiniciarPuntosContador);

let empezar = document.querySelector('#btn-start');
empezar.addEventListener('click', () => {
    if (player.value != "") {
        console.log(player.value);
        puntos = 0;
        contador = 0.0;
        tiempo.textContent = contador;
        gameZone.style.background = "#FCFCFC";
        showRectangle();
        tiempoIntervalo = setInterval(sumarContador, 1000);
    } else {
        player.placeholder = "Escribe tu nombre";
    }
}); 

function reiniciarPuntosContador() {
    clearTimeout(tiempoIntervalo);
    puntos = 0;
    document.querySelector('#score').textContent = puntos;
    contador = 0.0;
    tiempo.textContent = contador;
    gameZone.style.background = "#FCFCFC";
}

function cambiarPuntuacion() {
    let divPuntos = document.querySelector('#score');
    divPuntos.textContent = "";
    divPuntos.textContent = puntos;
}

function sumarContador() {
    if (contador == 20) {
        gameZone.textContent = "";
        clearTimeout(tiempoIntervalo);
    } else {
        contador += 1;
        tiempo.textContent = contador;
    }
}

function showRectangle() {
    gameZone.textContent = ""; // Vacía el gameZone (la pantalla)
    let rectangulo = document.createElement('div');
    rectangulo.classList.add('rectangulo');
    rectangulo.style.background = `rgb(${rnd(255, 0)}, ${rnd(255, 0)}, ${rnd(255, 0)})`;

    let ancho = rnd(maximoMinimo["max"], maximoMinimo["min"])
    let alto = rnd(maximoMinimo["max"], maximoMinimo["min"])

    // Posiciona el rectángulo en una posición aleatoria de la pantalla
    rectangulo.style.top = `${ rnd(height - alto, 1) }px`;
    rectangulo.style.left = `${ rnd(width - ancho, 1) }px`;
    // Redimensiona el rectángulo con valores aleatorios entre 50 y 70
    rectangulo.style.width = `${ ancho }px`;
    rectangulo.style.height = `${ alto }px`;

    gameZone.append(rectangulo);

    // Almacena los valores de la ventana cuando esta se redimensiona
    window.addEventListener('resize', () => {
        height = window.innerHeight;
        width = window.innerWidth - 350;
    } );
    rectangulo.addEventListener('click', (e) => {
        puntos++;
        cambiarPuntuacion();
        if (contador != 20) {
            showRectangle(); // Vuelve a llamar a la función para mostrar otro rectángulo
        } else {
            gameZone.textContent = "";
        }
        gameZone.style.background = `rgb(${rnd(255, 0)}, ${rnd(255, 0)}, ${rnd(255, 0)})`;
    } );

}

// Función que calcula números aleatorios entre dos parámetros
function rnd(max, min) {
    return Math.trunc(Math.random() * (max - min) + min); // Devuelve un número entre min y max
}

function dificultad() {
    let difficulty = document.querySelector('.selected').textContent;
    let maxMin = "";
    switch(difficulty) {
        case "1":
            maxMin = {"max": 300,"min": 180};
            break;
        case "2":
            maxMin = {"max": 180,"min": 120};
            break;
        case "3":
            maxMin = {"max": 100,"min": 70};
            break;
        case "4":
            maxMin = {"max": 60,"min": 50};
            break;
        case "5":
            maxMin = {"max": 50,"min": 30};
            break;
    }
    return maxMin;
}
