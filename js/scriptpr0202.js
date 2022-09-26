const nombre = prompt("Escribe tu nombre");
const notaPrimerExamen = prompt("Nota del primer examen");
const notaSegundoExamen = prompt("Nota del segundo examen");
const notaMedia = ((Number(notaPrimerExamen) + Number(notaSegundoExamen)) / 2);

alert(`Hola ${nombre}, la nota media de tus examenes es ${ notaMedia }`);