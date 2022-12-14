let datos = [
    {
        nombre: 'Pepe',
        ape1: 'Pérez',
        ape2: 'López',
        dni: '10100100',
        expediente: '1720',
        pass: '1234ABC',
        ciclo: 'DAW',
        notas: {
            DWEC: 7.8,
            DIW: 5.4,
            DWEC: 9.4
        }
    },
    {
        nombre: 'Juan',
        ape1: 'Mázquez',
        ape2: 'Hernández',
        dni: '7340831',
        expediente: '342',
        pass: 'P@ssw0rd',
        ciclo: 'DAM',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]
console.log(getAlumnosByCiclo('DAW'));

function getAlumnosByCiclo(str) {
    alumnos = [];
    datos.forEach( item => {
        if (item.ciclo == str) {
            alumnos.push(`${item.nombre} ${item.ape1} ${item.ape2}`);
        }
    } );
    return alumnos;
}

function getAlumnosByCicloV2(str) {
    alumnos = [];
    datos.filter( item => item.ciclo == str)
         .forEach( item => alumnos.push(`${item.nombre} ${item.ape1} ${item.ape2}`));
    return alumnos;
}

function getAlumnosByCicloV3(str) {
    // Desestructurización
    alumnos = [];
    datos.filter( item => item.ciclo == str)
         .forEach( 
            ({nombre, ape1, ape2}) => alumnos.push(`${ nombre } ${ ape1 } ${ ape2 }`)
         );
    return alumnos;
}

function getAlumnosByCicloV4(str) {
    // Función map
    return datos.filter( item => item.ciclo == str)
         .map( 
            ({nombre, ape1, ape2}) => `${ nombre } ${ ape1 } ${ ape2 }`,
         );
}