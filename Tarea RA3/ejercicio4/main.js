// Elemento extra
let contador = 3;
const box = document.createElement("p");

function redireccion() {
    // Mostramos el texto del contador
    box.textContent = "Será redireccionado en: " + contador;
    document.body.appendChild(box);

    // Creamos el intervalo de esta forma para poder mostrar el contador
    const intervaloContador = setInterval(() => {
        contador--;
        box.textContent = "Será redireccionado en: " + contador;

        // Cuando el contador llegue a 0 deberemos de limpiar el intervalo
        if (contador === 0) {
            clearInterval(intervaloContador);
        }
    }, 1000);

    // Rederigimos a la página 1 sola vez pasados esos 3 segundos
    setTimeout(() => {
        location.href = "https://cifpcarlos3.es";
    }, 3000);
}

redireccion();