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
        ciclo: 'DAW',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]
console.log(getNumberOfAlumnos('DAW'));

function getNumberOfAlumnos(str) {
    let numeroAlumnos = 0; // Se puede hacer con un filter
    datos.forEach( item => {
        if (item.ciclo == str) {
            numeroAlumnos++;
        }
    } );
    return numeroAlumnos;
}

function getNumberOfAlumnosV2(str) {
    // Filter
    return datos.filter( ({ciclo}) => ciclo == str)
                .length;
}

function getNumberOfAlumnosV3(str) {
    // Reduce desestructurando el segundo parámetro
    return datos.reduce( (acum, {ciclo}) => {
        if(ciclo == str) {
            return ++acum;
        }
    } );
}