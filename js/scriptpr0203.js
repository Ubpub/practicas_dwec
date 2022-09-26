const precioKiloManzanas = prompt("El precio por kilo de manzanas");
const cantidadManzanas = prompt("Cantidad de manzanas");
const precioKiloNaranjas = prompt("El precio por kilo de naranjas");
const cantidadNaranjas = prompt("Cantidad de naranjas");
const precioKiloPlatanos = prompt("El precio por kilo de plátanos");
const cantidadPlatanos = prompt("Cantidad de plátanos");

const totalKilos = Number(cantidadManzanas) + Number(cantidadNaranjas) + Number(cantidadPlatanos);

const precioTotalManzanas = Number(precioKiloManzanas) * Number(cantidadManzanas);
const precioTotalNaranjas = Number(precioKiloNaranjas) * Number(cantidadNaranjas);
const precioTotalPlatanos = Number(precioKiloPlatanos) * Number(cantidadPlatanos);

const precioTotal = precioTotalManzanas + precioTotalNaranjas + precioTotalPlatanos;

alert(`Has comprado un total de ${ totalKilos } kilos de fruta y te ha costado ${ precioTotal } euros`);