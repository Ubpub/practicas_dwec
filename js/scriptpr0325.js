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
            DWES: 9.4
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
console.log(getAverageGrade('DWES'));

function getAverageGrade(str) {
    let media = "El módulo no existe";
    if (str == "DWEC" || str == "DIW" || str == "DWES") {
        media = 0;
        let numeroTotal = 0;
        datos.forEach( item => {
            media += item.notas[str];
            numeroTotal++;
        } );
        media = media.toFixed(2) / numeroTotal;
    }
    return media;
}

function getAverageGradeV2(str) {
    let total = datos.reduce( (acum, item) =>  acum + item.notas[str] , 0 );
    return Math.round( (total / datos.length) *100 ) / 100; // Multiplica y divide entre 100 para redondearlo mejor
}