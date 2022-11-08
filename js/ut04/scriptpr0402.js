/* let cadena = "";
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
for(let i = 1; i <= 12; i++) {
    cadena = `${ cadena }
        <div class="month">
            <div class="month-number">${i}</div>
            <div class="month-name">${ meses[i-1] }</div>
        </div>
    `;
}

let divMeses = document.getElementById('months');
divMeses.innerHTML = cadena;
console.log(cadena); */

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let div = document.getElementById('months');
for(let i = 1; i <= 12; i++) {
    let divMonth = document.createElement('div');
    divMonth.classList.add('month');

    let monthNumber = document.createElement('div');
    monthNumber.classList.add('month-number');
    monthNumber.textContent = i;

    let monthName = document.createElement('div')
    monthName.classList.add('month-name');
    monthName.textContent = meses[i-1];
    
    divMonth.append(monthNumber);
    divMonth.append(monthName);
    div.append(divMonth);
}