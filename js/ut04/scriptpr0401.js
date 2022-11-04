let cadena = "";
for(let i = 1; i <= 30; i++) {
    cadena = `${ cadena }<span class="number">${ i }</span>`
}

let numbers = document.getElementById('numbers');
numbers.innerHTML = cadena;