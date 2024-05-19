function palindromo(cadena) {
    var resultado = "La frase \"" + cadena + "\" \n";
    var cadenaOriginal = cadena.toLowerCase();
    var letrasEspacios = cadenaOriginal.split("");

    var cadenaSinEspacios = "";
    for (var i in letrasEspacios) {
        if (letrasEspacios[i] != " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();

    var iguales = true;
    for (var i in letras) {
        if (letras[i] != letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    if (iguales) {
        resultado += " es un palíndromo";
    } else {
        resultado += " no es un palíndromo";
    }
    return resultado;
}


function intxt() {

    var cad = document.getElementById("texto").value;
    document.getElementById("result").innerText = palindromo(cad);
}
