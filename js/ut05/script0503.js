let tabla = document.querySelector("#tbl-casillas");
let letras = "A B C D E F G H I J".split(' ');
let numeros = "9 8 7 6 5 4 3 2 1 0".split(' ');
let num = 1;

for (let i = 0; i < 11; i++) {
    let fila = document.createElement('tr');
    for (let j = 0; j < 11; j++) {
        let casilla = document.createElement("td");
        if (i == 0 || j == 0) {
            casilla.classList.add("cabeceras");
            if (i == 0 && j > 0) casilla.textContent = letras[j-1];
            if (j == 0 && i > 0) casilla.textContent = numeros[i-1];
        } else {
            casilla.textContent = num;
            casilla.id = `${letras[j-1]}${numeros[i-1]}`;
            num++;
        }
        casilla.setAttribute("onmousedown", "return false");
        fila.append(casilla);
    }
    tabla.append(fila);
}

tabla.addEventListener('click', (e) => {
    let coord = document.querySelector('#coords');
    coord.textContent = e.target.id;
    if (e.target.getAttribute("id") != null) {
        e.target.classList.toggle('selected');
    }
} );
tabla.addEventListener('contextmenu', (e) => {
    let coord = document.querySelector('#coords');
    coord.textContent = e.target.id;
    if (e.target.getAttribute("id") != null) {
        e.target.classList.add('right-click');
    }
} )
