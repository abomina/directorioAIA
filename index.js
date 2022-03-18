
function sumar(n1, n2) {
    // Sumar 2 numeros
    var suma = n1 + n2;
    return suma;
}

function restar(n1, n2) {
    // restar 2 numeros
    var resta = n1-n2;
    return resta;
}

function multiplicar(n1, n2) {
    
    var multiplicacion = n1 * n2;
    return multiplicacion;

}

function dividir(n1, n2) {
    // dividir 2 numeros

}

function modulo(n1, n2) {
    // modulo de 2 numeros

}

function concatenar(n1, n2) {
    // concatenar 2 numeros

}

function operar() {
    var myForm = document.getElementById('formOperar');

    switch (myForm.operador.value) {
        case "Suma":
            myForm.res.value = sumar(parseInt(myForm.numero1.value), parseInt(myForm.numero2.value));
            break;

        case "Resta":
            myForm.res.value = restar(parseInt(myForm.numero1.value), parseInt(myForm.numero2.value));
            break;

        case "Multiplicación":
            myForm.res.value = multiplicar(parseInt(myForm.numero1.value), parseInt(myForm.numero2.value));
            break;

        case "División":
            myForm.res.value = dividir(parseInt(myForm.numero1.value), parseInt(myForm.numero2.value));
            break;

        case "Modulo":
            myForm.res.value = modulo(parseInt(myForm.numero1.value), parseInt(myForm.numero2.value));
            break;

        case "Concatenación":
            myForm.res.value = concatenar(parseInt(myForm.numero1.value), parseInt(myForm.numero2.value));
            break;

    }

}
