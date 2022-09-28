let numero = undefined;
while(true) {
    if(!(numero < Infinity && numero > -Infinity) || numero == null)
        numero = prompt("Introduce un número");
    else {
        alert(`Has introducido el número ${ numero }`);
        break;
    }
};
