// Pedimos ambas palabras
let palabraComprimida = prompt("Escribe una palabra para comprimirla");

let descomprimirPalabra = prompt("Escribe una palabra para descomprimirla");

// Creamos la funcion de compresión que recibirá por parametro la palabra comprimida
function compresion(frase) {
    // Revisamos que no haya ningún dígito
    // Revisamos en los strings también que sean valores alfabéticos permitiendo los espacios
    const checkNumber = /\d/;
    const stringRegex = /[^a-zA-Z ]/;
    
    if (checkNumber.test(frase) || frase.trim() == "" || stringRegex.test(frase)) {
        alert("Sólo se puede introducir valores alfabéticos");
        return;
    }

    let contador = 1;
    let resultado = "";

    // abrimos bucle
    for (let i = 1; i < frase.length; i++) {
        // Si la letra anterior es igual a la letra siguiente incrementamos el contador
        if (frase[i - 1] == frase[i]) {
            contador++;
        } else {
            // Si contador es mayor a 1, vamos añadiendo ya a resultado el conteo
            if (contador > 1) {
                resultado += contador;
            }
            // seguido del conteo, le ponemos la letra anterior y reiniciamos el contador
            resultado += frase[i - 1];
            contador = 1;
        }

    }

    // Debemos manualmente la última letra que ha escrito el user, ya que si no hacemos esto, no lo añade
    resultado += frase[frase.length - 1];

    // Cogemos todos los espacios y los sustituimos por los ?
    const espacios = / /g;
    const sinEspacio = resultado.replace(espacios, "?");


    return sinEspacio;
}

// Creamos la funcion de descomprimir 
function descomprimir(frase) {
    // Creamos regexs 
    const stringRegex = /[^a-zA-Z0-9?]/;

    if (frase.trim() == "" || stringRegex.test(frase)) {
        alert("Sólo se puede introducir valores alfabéticos");
        return;
    }

    // Este lo creamos para poder separar los números de las letras
    const checkNumber = /\d/;

    let numero = "";
    let resultado = "";


    for (let i = 0; i < frase.length; i++) {
        // Si esto es true, almacenamos los números
        if (checkNumber.test(frase[i])) {
            numero += frase[i];
        } else {
            // En el siguiente salto comprobamos que número este vacio, en caso de que sí, añadimos la letra
            if (numero == "") {
                resultado += frase[i];
            } else {
                // Si hay un número, deberemos de repetir tantas veces diga ese número
                resultado += frase[i].repeat(numero);

            }
            // Vaciamos numero
            numero = "";
        }
    }

    // Reemplazamos todas las interrogaciones
    let sinInterrogacion = resultado.replaceAll("?", " ");

    return sinInterrogacion;

}

console.log(compresion(palabraComprimida));

console.log(descomprimir(descomprimirPalabra));
