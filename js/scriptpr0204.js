const pi = 3.1419;
let radio = Number(prompt("Escriba el radio del círculo"));
let perimetro = 2 * pi * radio;
let area = perimetro * Math.pow(radio, 2);

alert(`El perímetro del círculo de radio ${ radio } es ${ perimetro } y su área es ${ area }`);