let datos = [
    {
        nombre: 'Ivan',
        apellidos: 'Braginski',
        dni: '71995496',
    },
    {
        nombre: 'Antonio',
        apellidos: 'Fernández Carriedo',
        dni: '02994386T',
    },
];
console.log(addNif(datos));

function addNif(arr) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    arr.forEach( item => {
        if (item.dni.length < 9) {
            item['nif'] = item.dni + letras.charAt(Number(item.dni) % 23);
            delete item.dni;
        }
    } );
    return arr;
}