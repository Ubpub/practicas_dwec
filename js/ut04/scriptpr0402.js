let cadena = "";
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
console.log(cadena);