let objeto1 = {
    nombre: 'Cecilia',
    apellido: 'Llamazares',
    provincia: 'León',
    idioma: 'Español',
}

let objeto2 = {
    edad: 20,
    apellido: 'López',
    provincia: 'León',
    curso: 'DAW2',
}

console.log(intersectObjects(objeto1, objeto2));

function intersectObjects(objeto1, objeto2) {
    let objetoFinal = {};
    for (let key1 in objeto1) {
        for (let key2 in objeto2) {
            if (key1 == key2) {
                objetoFinal[key1] = objeto1[key1];
                objetoFinal[key2] = objeto1[key2];
            }
        }
    }
    return objetoFinal;
}