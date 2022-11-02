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
console.log(getUsernames());

function getUsernames() {
    let usernames = [];
    datos.forEach( item => {
        let nickname = item.nombre.toLowerCase() + item.ape1.charAt(0).toLowerCase() + item.ape2.charAt(0).toLowerCase();
        usernames.push(nickname);
    } );
    return usernames;
}

function getUsernamesV2() {
    // Map
    return datos.map( item => item.nombre.toLowerCase() + item.ape1[0].toLowerCase() + item.ape2[0].toLowerCase());
}