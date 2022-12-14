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
        ciclo: 'DAM',
        notas: {
            DWEC: 8,
            DIW: 5.2,
            DWES: 4
        }
    }
]
console.log(getAveragesV2());

function getAverages() {
    let notas = [];
    datos.forEach( item => {
        let media = (item.notas.DWEC + item.notas.DIW + item.notas.DWES) / 3;
        notas.push(
            {
                alumno: `${ item.nombre } ${ item.ape1 } ${ item.ape2 }`,
                expediente: item.expediente,
                nota_media: media.toFixed(2),
            }
        )
    } );
    return notas;
};

function getAveragesV2() {
    return datos.map( item => {
        let media = (item.notas.DWEC + item.notas.DIW + item.notas.DWES) / 3;
        return {
            alumno: `${ item.nombre } ${ item.ape1 } ${ item.ape2 }`,
            expediente: item.expediente,
            nota_media: media.toFixed(2), // Utilizar la función calcularMedia()
        }
    } )
};

function calcularMedia(notas) {
    suma = 0;
    countNotas = 0;

    let valores = Object.values( notas )
                         .reduce( (acum, item, index, arr) => {
                            return index != arr.length-1 ? acum+ item : (acum + item)/arr.length;
                         }, 0 )
                         .toFixed(2);
}