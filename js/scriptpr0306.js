let str = '100101';
let baseFrom = 2;
let baseTo = 16;
console.log(convertBase(str, baseFrom, baseTo))

function convertBase(str, baseFrom, baseTo) {
    // let num = parseInt(str, baseFrom);
    if (baseFrom == 2) {
        return parseInt(str, baseTo);
    } else if (baseFrom == 10) {
        if (baseTo == 2) {
            return str.toString(baseTo);
        }
        return parseInt(str, baseTo);
    } else {
        return str.tString(baseTo);
    }
    
}