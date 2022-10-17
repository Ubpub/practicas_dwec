console.log(ascendDescend(10, 2, 5));

function ascendDescend(len, min, max) {
    let numero = min;
    let resultado = "";
    let retroceso = false;
    for (let i = 0; i < len; i++) {
        resultado = resultado + numero;
        if (numero == max) {
            retroceso = true;
        } else if (numero == min) {
            retroceso = false;
        }
        if (retroceso) numero -= 1;
        else numero += 1;
    }
    return resultado;
}