// Creamos el contenedor y lo incrustamos en el body
const createDiv = document.createElement("div")
document.body.appendChild(createDiv);

function sizeWindows() {
    // Las dos primeras variables son para recoger el ancho y alto
    const widthScreen = window.innerWidth;
    const heigthScreen = window.innerHeight;
    const createPType = document.createElement("p");
    const createPResolution = document.createElement("p");
    const resolucionPantalla = `${widthScreen}x${heigthScreen}`

    // Creamos las condiciones para ver que anchura tiene la pantalla
    if (widthScreen < 768) {
        createPType.textContent = "Tipo Dispositivo: Móvil";
        createPResolution.textContent = "Resolucion de Pantalla: "+resolucionPantalla;
    }
    else if (widthScreen >= 768 && widthScreen < 1024) {
        createPType.textContent = "Tipo Dispositivo: Tablet";
        createPResolution.textContent = "Resolucion de Pantalla: "+resolucionPantalla;
    } else {
        createPType.textContent = "Tipo Dispositivo: Escritorio";
        createPResolution.textContent = "Resolucion de Pantalla: "+resolucionPantalla;
    }
    createDiv.appendChild(createPType)
    createDiv.appendChild(createPResolution);

    const esHorizontal = document.createElement('p');
    if (widthScreen >= heigthScreen) {
        esHorizontal.textContent = "Orientacion de la Pantalla: Horizontal";
    } else {
        esHorizontal.textContent = "Orientacion de la Pantalla: Vertical";
    }

    createDiv.appendChild(esHorizontal);


    const pIdioma = document.createElement("p");

    // recogemos los dos primeros elementos que nos da el objeto
    const idioma = navigator.language.slice(0,2).toLowerCase();

    pIdioma.textContent = "Idioma Principal: " + idioma;

    createDiv.appendChild(pIdioma);

    
    const esConexionSegura = window.location.protocol == "https:";
    const pEsSeguro = document.createElement("p");

    if (esConexionSegura){
        pEsSeguro.textContent = 'Protocolo Seguro: https';
    } else {
        pEsSeguro.textContent = 'Protocolo Seguro: http';
    }

    createDiv.appendChild(pEsSeguro);

}

sizeWindows();