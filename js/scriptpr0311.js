console.log(ascendDescend(10, 2, 5));

function ascendDescend(len, min, max) {
    let numero = min;
    let resultado = "";
    let retroceso = true;
    for (let i = 0; i < len; i++) {
        resultado = resultado + numero;
        if (numero == max || numero == min) retroceso = !retroceso;
        if (retroceso) numero -= 1;
        else numero += 1;
    }
    return resultado;
}