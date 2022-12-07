// Corregido en clase

let inputPass = document.querySelector("#pass1");
inputPass.addEventListener('input', checkSecurity);

function checkSecurity(e) {
    let pass = e.target.value;
    let security = 0;

    let numDigits = 0;
    let numMinus = 0;
    let numMayus = 0;
    let numSimb = 0;

    let abc = "abcdefghijklmnñopqrstuvwxyz";

    pass.split('').forEach( item => {
        numDigits += "0123456789".includes(item) ? 1 : 0;
        numMinus += abc.includes(item) ? 1 : 0;
        numMayus += abc.toUpperCase().includes(item) ? 1 : 0;
        numDigits += "0123456789".includes(item) ? 1 : 0;
    } );
    numSimb = pass.length - (numDigits + numMinus + numMayus);

    // Longitud
    security = Math.floor(pass.length / 3);

    // Dígito +1
    security += numDigits > 0 ? 1 : 0;

    // Mayúsculas +1
    security += numMayus > 0 ? 1 : 0;

    // Minúsculas +1
    security += numMinus > 0 ? 1 : 0;

    // Símbolos +1
    security += numSimb > 0 ? 1 : 0;

    /* let securityBar = document.querySelector("#securityBar");
    securityBar.value = security; */
    console.log("LONGITUD:", pass.length);
    console.log("SEGURIDAD", security);
    console.log("MAYÚSCULAS", numMayus);
    console.log("MINÚSCULAS", numMinus);
}