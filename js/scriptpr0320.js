let fechas = ['24-05-2020', '02-12-2018', '14-02-2020'];
console.log(sortDatesV3(fechas));

function sortDates(arr) {
    return arr.sort( (a, b) => a < b ? -1 : 1 );
};

function sortDatesV2(arr) {
    return arr.sort( (a, b) => {
        if (a.substring(6) > b.substring(6)) {
            return 1;
        } else if (a.substring(6) < b.substring(6)) {
            return -1; // 3, 5   0, 2
        } else {
            if (a.substring(3, 5) > b.substring(3, 5)) {
                return 1;
            } else if (a.substring(3, 5) < b.substring(3.5)) {
                return -1;
            } else {
                if (a.substring(0, 2) > b.substring(0,2)) {
                    return 1;
                } else if (a.substring(0, 2) < b.substring(0, 2)) {
                    return -1;
                }
            }
        }
    } );
}

function sortDatesV3(arr) {
    return arr.sort( (a, b) => {
        let strA = a.slice(6) + a.slice(3, 5) + a.slice(0.2);
        let strB = b.slice(6) + b.slice(3, 5) + b.slice(0, 2);

        return strA < strB ? -1 : 1;
    } );
}