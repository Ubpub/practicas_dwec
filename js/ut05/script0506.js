// Variables que recogen los contenedores principales del html
let body = document.body;
let hanged = document.querySelector('#hanged');
let espacioDiv = document.querySelector('#spaces');
let keyboard = document.querySelector('#keyboard');
let msg = document.querySelector('#msg');

let palabra = words[Math.trunc(Math.random() * words.length)]; // Palabra a adivinar
let letras = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z".split(" "); // Array de letras
let restantes = palabra.length; // Letras restantes a adivinar, inicializada a la longitud de la palabra
let keys = ""; // Una variable para almacenar las letras generadas del array
let fallos = 0;
// console.log(palabra);

// Carga los elementos en la pantalla
renderScreen();

function renderScreen() {
    loadImage(); // Carga la primera imagen en pantalla
    for (let i = 0; i < palabra.length; i++) {
        // Genera tantos espacios como tenga la palabra a adivinar
        let espacio = document.createElement('span');
        espacio.classList.add('space');
        espacio.setAttribute('data-id', palabra[i]); // Atributo para relacionarlo con el botón
        espacioDiv.append(espacio);
    }
    for(let i = 0; i < letras.length; i++) {
        // Genera tantos botones de letras como tenga el array de letras
        let letra = document.createElement('span');
        letra.classList.add('key');
        letra.setAttribute("onmousedown", "return false");
        letra.textContent = letras[i];
        letra.setAttribute('data-value', letra.textContent); // Atributo para relacionarlo con el teclado
        keyboard.append(letra);
    }
    keys = document.querySelectorAll('.key'); // Almacena todos los botones creados
    // Evento para el click
    keyboard.addEventListener('click', pulsarLetra);
    // Evento para el teclado
    // El evento keydown EN EL BODY
    body.addEventListener('keydown', pulsarTeclado);
}

// Carga la primera imagen del juego
function loadImage() {
    let img = document.createElement('img');
    img.src = "../imgs/hangman/hangman_00.png";
    hanged.append(img);
}

// Evento para el teclado
function pulsarTeclado(e) {
    if (!e.repeat) {

        // Comprueba que no haya perdido o ganado para continuar con la partida
        if (fallos < 9 && restantes > 0){
            let letraSeleccionada = document.querySelector(`span[data-value=${e.key}]`);

            // Comprueba que no se hayan pulsado antes para no sumar fallos o aciertos de más
            if (!letraSeleccionada.classList.contains('succeed') && !letraSeleccionada.classList.contains('fail')) {
                // Comprueba si la palabra incluye la letra seleccionada
                if (palabra.includes(e.key)){
                    letraSeleccionada.classList.add('succeed');
                    // Selecciona el campo vacío con el mismo valor (data-id)
                    let acertadas = document.querySelectorAll(`span[data-id=${e.key}]`);
                    Array.from(acertadas).forEach( item => item.textContent = e.key);
                    restantes -= acertadas.length;
                    if (restantes == 0) {
                        // Si no quedan letras por adivinar aparece un mensaje de "Has ganado"
                        msg.style.background = "green";
                        msg.textContent = "Has ganado";
                    }
                } else {
                    letraSeleccionada.classList.add('fail');
                    fallos++; // Suma un fallo
                    changeImage(); // Llama a una función para cambiar la imagen
                }
            }
        }
    }
}

// Evento para el click (Se que se pueden hacer los dos en el mismo)
function pulsarLetra(e) {
    if (e.target.textContent.length < 2) {

        // Comprueba que no haya perdido o ganado para continuar con la partida
        if (fallos < 9 && restantes > 0){

            // Comprueba que no se hayan pulsado antes para no sumar fallos o aciertos de más
            if (!e.target.classList.contains('succeed') || !e.target.classList.contains('fail')) {
                // Comprueba si la palabra incluye la letra seleccionada
                if (palabra.includes(e.target.textContent)) {
                    e.target.classList.add('succeed');
                    // Selecciona el campo vacío con el mismo valor (data-id)
                    let acertadas = document.querySelectorAll(`span[data-id=${e.target.textContent}]`);
                    Array.from(acertadas).forEach( item => item.textContent = e.target.textContent);
                    restantes -= acertadas.length;
                    if (restantes == 0) {
                        // Si no quedan letras por adivinar aparece un mensaje de "Has ganado"
                        msg.style.background = "green";
                        msg.textContent = "Has ganado";
                    }
                } else {
                    e.target.classList.add('fail');
                    fallos++; // Suma un fallo
                    changeImage(); // Llama a una función para cambiar la imagen
                }
            }
        }
    }
}

function changeImage() {
    let img = document.querySelector('img');
    // Cambia la imagen dependiendo de los fallos
    img.src = `../imgs/hangman/hangman_0${ fallos }.png`;
    if (fallos == 9) {
        // Si los fallos son 9 (el número de imágenes) aparece un mensaje de "Has fallado"
        msg.style.background = "red";
        msg.textContent = "Has fallado";
    }
}

