let numero = prompt("Introduce un número:");
fact(numero);

function fact(n) {
    let r = 1;
    for(let i = n; i > 0; i--) {
        r *= i;
    }
    console.log(r);
}