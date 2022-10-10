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
    for (let key in objeto1) {
        if (key in objeto2) {
            objetoFinal[key] = objeto1[key];
            objetoFinal[key] = objeto1[key];
        }
    }
    return objetoFinal;
}