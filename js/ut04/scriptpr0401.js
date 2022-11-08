/* let cadena = "";
for(let i = 1; i <= 30; i++) {
    cadena = `${ cadena }<span class="number">${ i }</span>`
}

let numbers = document.getElementById('numbers');
numbers.innerHTML = cadena; */

let div = document.getElementById('numbers');
for(let i = 1; i <= 30; i++) {
    let span = document.createElement('span');
    span.textContent = i;
    span.classList.add('number');
    div.append(span);
}