// Declaramos variable la cual se encargará de abrir una nueva ventana
let ventana = window.open("", "_blank", "height=400, width=600");

// Recogemos el valor de fecha (el día en el cual se ejecute esto)
// Creamos también un parrafo
const fechaActual = new Date();
const parrafo = ventana.document.createElement("p");

// Sacamos el último día del año
// La variable calculos va a guardar la diferencia que hay entre esos días en ms
const ultimoDiaAnio = new Date(fechaActual.getFullYear(), 11,31);
const calculos = ultimoDiaAnio - fechaActual;

// Ahora lo pasamos a días con estos calculos
const diasRestantes = Math.ceil(calculos /  (1000*60*60*24))

// Lo añadimos al parrafo
parrafo.textContent = "Hoy es "+fechaActual.getDay()+ "/"+fechaActual.getMonth()+"/"+fechaActual.getFullYear()+" faltan "+ diasRestantes+ " días para fin de año";


ventana.document.body.appendChild(parrafo)