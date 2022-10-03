let numero = null;

while (numero != 0) {
    numero = prompt("Introduce un número. 0 para finalizar:");
    if(numero != 0)
        alert(isPrime(numero));
    
}

function isPrime(n) {
    if(n == 0 || n == 1 || n == 4) return false;
    for (let x = 2; x < (n / 2); x++) {
        if (n % x == 0) return false;
    }
    return true;
};