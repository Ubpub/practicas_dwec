let lado1 = Number(prompt("Introduce el primer lado:"));
let lado2 = Number(prompt("Introduce el segundo lado:"));
let lado3 = Number(prompt("Introduce el tercer lado:"));
console.log(canFormTriangle(lado1, lado2, lado3));

function canFormTriangle(a, b, c) {
    if ((a + b) > c && (a + c) > b && (b + c) > a) return true;
    else return false;
};