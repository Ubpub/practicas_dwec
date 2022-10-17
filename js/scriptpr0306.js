let str = '100101';
let baseFrom = 2;
let baseTo = 16;
console.log(convertBase(str, baseFrom, baseTo))

function convertBase(str, baseFrom, baseTo) {
    return parseInt(str, baseFrom).toString(baseTo);
}