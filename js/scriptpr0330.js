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
console.log(getUnsecurePass());

function getUnsecurePass() {
    let alumnos = [];
    datos.forEach( item => {
        let digitos = 0;
        for (let i = 0; i < item.pass.length; i++) {
            if(!isNaN(Number(item.pass.charAt(i)))) {
                digitos ++;
            }
        }
        if (item.pass.length < 8 || (item.pass.toLowerCase() == item.pass) || (item.pass.toUpperCase() == item.pass) || digitos == 0) {
            alumnos.push(`${ item.nombre } ${ item.ape1 } ${ item.ape2 }`);
        }
    } );
    return alumnos;
}

// Hacer una función para comprobar si tiene min, mas y num.
// Después de eso, utilizar filter