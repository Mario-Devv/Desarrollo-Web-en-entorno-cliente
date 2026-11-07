// Recogemos los elementos del html
const headerBox = document.querySelector(".header__box");
const mainBox = document.querySelector(".main__box");
const createTitle = document.createElement("h1");
const createP = document.createElement("p");
let idiomaElegido = "";


function checkLanguage() {
    let idioma;
    let nuevoIdioma = ""

    // Revisamos que en el localstorage tengamos ese elemento
    // En caso de que exista actualizamos nuevo idioma
    if (localStorage.getItem("language") == "es") {
        nuevoIdioma = "es";

    } else if (localStorage.getItem("language") == "en") {
        nuevoIdioma = "en";
    } else {
        // Si no existe nada de esto en la memoria entonces preguntaremos
        while (nuevoIdioma.toLowerCase() != "es" && nuevoIdioma.toLowerCase() != "en") {
            idioma = (prompt("Elige el idioma de la página: ES | EN") ?? "").trim();
            nuevoIdioma = idioma;
            if (nuevoIdioma.toLowerCase() != "es" && nuevoIdioma.toLowerCase() != "en") alert("Idioma no conocido, solo es válido ES | EN");
        }
    }

    // Almacenamos el elemento en localstorage
    localStorage.setItem("language", nuevoIdioma.toLowerCase());
    return nuevoIdioma.toLowerCase();
}

idiomaElegido = checkLanguage();


function translate(lengua) {
    // Comprobamos el idioma, y mostramos una frase
    if (lengua == "es") {
        createTitle.textContent = "Bienvenido a mi página";
        headerBox.appendChild(createTitle);

        createP.textContent = "Esta es mi página en Español";
        mainBox.appendChild(createP);
    }

    if (lengua == "en") {
        createTitle.textContent = "Welcome to my page";
        headerBox.appendChild(createTitle);

        createP.textContent = "This is my new website in English";
        mainBox.appendChild(createP);
    }
}

translate(idiomaElegido)
