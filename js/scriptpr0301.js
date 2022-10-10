let obj = {
    nombre: 'Lola',
    apellido: 'Gutierrez',
};

console.log(cloneObject(obj));

function cloneObject(obj) {
    let copiaObj = {
        ...obj,
    }
    return copiaObj;
}