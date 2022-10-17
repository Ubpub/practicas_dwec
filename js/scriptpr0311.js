console.log(ascendDescend(10, 2, 5));

function ascendDescend(len, min, max) {
    let numero = min;
    let resultado = "";
    let ascender = true;
    for (let i = 0; i < len; i++) {
        resultado = resultado + numero;
        if (numero == max || numero == min) ascender = !ascender;
        if (ascender) numero -= 1;
        else numero += 1;
    }
    return resultado;
}