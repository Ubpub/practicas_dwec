let personas = [
    { name: 'Víctor', surname: 'González' },
    { name: 'Luis', surname: 'Velilla' },
    { name: 'Pepe', surname: 'Pérez' },
];

console.log(generateUsername(personas))

function generateUsername(arr) {
    arr.forEach( item => {
        let nickname = item.name.substring(0,1).toLowerCase() + item.surname.toLowerCase() + numeroAleatorio() + numeroAleatorio();
        item["nickname"] = nickname;
    } );
    return arr
}

function numeroAleatorio() {
    return Math.trunc(Math.random() * 9 + 1);
}