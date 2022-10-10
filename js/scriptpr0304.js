let objeto1 = {
    color: 'Rojo',
    peso: 4,
    tamaño: 'Pequeño',
}

let objeto2 = {
    color: 'Amarillo',
    peso: 6,
    sabor: 'Ácido',
}

console.log(containsObject(objeto1, objeto2));

function containsObject(a, b) {
    for (let key in b) {
        if (!(key in a)) {
            return false;
        }
    }
    return true;
}