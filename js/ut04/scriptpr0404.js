// 81 celdas

let tablero = document.getElementById("board");
let tabla = document.createElement("table");
let odd = false;
let letras = "A B C D E F G H".split(' ');
let numeros = "7 6 5 4 3 2 1 0".split(' ');
for (let i = 0; i < 9; i++) {
    let fila = document.createElement("tr");
    for (let j = 0; j < 9; j++) {
        let celda = document.createElement("td");
        if(i == 0 || j == 0) {
            celda.classList.add("cabeceras");
            if (i == 0 && j > 0) celda.textContent = letras[j-1];
            if (j == 0 && i > 0) celda.textContent = numeros[i-1];
        } else {
            if (odd) {
                celda.classList.add("oddCell");
            } else {
                celda.classList.add("cell");
            }
            celda.id = `${letras[j-1]}${numeros[i-1]}`;
            celda.addEventListener('click', () => console.log("Has pulsado en la casilla", celda.id));
        }
        odd = !odd;
        fila.append(celda);
    }
    tabla.append(fila);
}
tablero.append(tabla);