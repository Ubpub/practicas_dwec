let numero = undefined;
// while(true) {
//     if(!(numero < Infinity && numero > -Infinity) || numero == null)
//         numero = prompt("Introduce un número");
//     else {
//         alert(`Has introducido el número ${ numero }`);
//         break;
//     }
// };

while(isNaN(numero) || numero == "" || numero == null) {
    numero = prompt("Introduce un número");
}

alert(`Has introducido el número ${ numero }`);