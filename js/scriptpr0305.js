let fruta = {
    nombre: 'Naranja',
    color: 'naranja',
    sabor: 'dulce',
    densidad: undefined,
    textura: 'jugosa',
};

console.log(removeUndefined(fruta));

function removeUndefined(a) {
    let copiaA = {}
    for (key in a) {
        if (!(a[key] == undefined)) {
            copiaA[key] = a[key];
        }
    }
    return copiaA;
}