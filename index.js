const displayValorAnterior = document.getElementById('numanterior');
const displayValorActual = document.getElementById('numactual');
const botonNumeros = document.querySelectorAll('.numero');
const botonOperador = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual)


botonNumeros.forEach(boton => {
    boton.addEventListener('click', ()=>display.agregarNumero(boton.innerHTML));
});