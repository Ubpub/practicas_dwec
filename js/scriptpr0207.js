let asterisco = "*"
let numero = parseInt(prompt("Introduce un número"));
while(isNaN(numero) || numero == "" || numero == null || numero < 0){
    numero = parseInt(prompt("Introduce un número"));
}
for(let i = 0; i < numero; i++) {
    console.log(asterisco);
    asterisco = asterisco + "*";
};