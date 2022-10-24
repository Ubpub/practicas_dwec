let personas = [
    { name: 'Víctor', surname: 'González' },
    { name: 'Luis', surname: 'Velilla' },
    { name: 'Pepe', surname: 'Pérez' },
];

console.log(generateUsername(personas))

function generateUsername(arr) {
    arr.forEach( item => item["nickname"] = item.name.charAt(0).toLowerCase() + item.surname.toLowerCase() + numeroAleatorio() + numeroAleatorio() );
    // Se puede hacer :
    // Object.assign(item, { nickname:nickname });
    return arr;
}

function numeroAleatorio() {
    return Math.trunc(Math.random() * 9 + 1); // Devuelve un número entre el 0 y el 10
}