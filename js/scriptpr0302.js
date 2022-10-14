let objeto1 = {
    nombre: 'Felipe',
}
let objeto2 = {
    apellido: 'Pérez',
}

console.log(mergeObjects(objeto1, objeto2));

function mergeObjects(objeto1, objeto2) {
    return {
        ...objeto1,
        ...objeto2,
    };
}