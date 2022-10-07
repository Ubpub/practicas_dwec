let numero = null;

while (numero != 0) {
    numero = prompt("Introduce un número. 0 para finalizar:");
    if(numero != 0)
        console.log(isPrime(numero) ? "primo" : "no primo");
    
}

function isPrime(n) {
    if(n == 0 || n == 4) return false;
    for (let x = 2; x < (n / 2); x++) {
        if (n % x == 0) return false;
    }
    return true;
};