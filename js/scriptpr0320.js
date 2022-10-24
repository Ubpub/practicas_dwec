let fechas = ['24-05-2020', '02-12-2018', '14-02-2020'];
console.log(sortDates(fechas));

function sortDates(arr) {
    return arr.sort( (a, b) => a < b ? -1 : 1 );
};