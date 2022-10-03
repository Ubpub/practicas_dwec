let oper1 = Number(prompt("Introduce el primer número:"));
let oper2 = Number(prompt("Introduce el segundo número:"));
let operador = prompt("Introduce el operador:");
calc(oper1, oper2, operador);

function calc(oper1, oper2, operador) {
    let resultado = operador == "+" ? oper1 + oper2 :
                    operador == "-" ? oper1 - oper2 :
                    operador == "/" ? oper1 / oper2 :
                    operador == "*" ? oper1 * oper2 :
                    "Operador erróneo";
    console.log(resultado);
}