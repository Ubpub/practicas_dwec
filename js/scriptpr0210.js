let num = null;
let mayor = null;
let menor = null;
let aux = 0;
for(let i = 0; i < 5; i++) {
    num = prompt("Introduce un número:");
    while(isNaN(num) || num == "" || num == null) {
        num = prompt("Introduce el primer número:");
    }
    // console.log("NUEVO NÚMERO");
    // console.log("Número: ", num);
    // console.log("Mayor: ", mayor);
    // console.log("Menor: ", menor);
    // console.log("Auxiliar: ", aux);
    if (aux == 0) {
        mayor = num;
        menor = num;
        aux++;
        // console.log("CONDICIÓN AUXILIAR");
        // console.log("Número: ", num);
        // console.log("Mayor: ", mayor);
        // console.log("Menor: ", menor);
        // console.log("Auxiliar: ", aux);
    } else {
        if (+num > +mayor) {
            mayor = num;
            // console.log("CONDICION MAYOR");
            // console.log("Número: ", num);
            // console.log("Mayor: ", mayor);
            // console.log("Menor: ", menor);
            // console.log("Auxiliar: ", aux);
        } else if (+num < +menor) {
            menor = num;
            // console.log("CONDICION MENOR");
            // console.log("Número: ", num);
            // console.log("Mayor: ", mayor);
            // console.log("Menor: ", menor);
            // console.log("Auxiliar: ", aux);
        }
    }
}
alert(`El mayor número es ${ mayor } y el menor ${ menor }`);