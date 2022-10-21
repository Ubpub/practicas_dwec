let nombres = ['Cecilia', 'Pablo', 'Luis', 'Emma'];
sendMessage(nombres);

function sendMessage(arr) {
    arr.forEach( item => {
        console.log(`Hola ${item}, bienvenido al curso de DWEC`);
    } );
}