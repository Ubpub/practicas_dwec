let obj = {
    nombre: 'Lola',
    apellido: 'Gutierrez',
};

console.log(cloneObject(obj));

function cloneObject(obj) {
    return { ...obj } // return Object.assign({}, obj)
}