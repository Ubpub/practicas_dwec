let boton = document.getElementById("button");

boton.addEventListener('click', () => {
    document.body.style.background = `rgb(${random()}, ${random()}, ${random()})`;
} )

function random() {
    return Math.trunc(Math.random() * 254 + 1); // Devuelve un número aleatorio entre el 255 y 0
}