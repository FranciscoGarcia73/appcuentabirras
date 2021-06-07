var sumar = $("#sumar");
var restar = $("#restar");
var display = $("#contador");
var destino = $("#destino");
var importe = $("#importe");

let contador = 0;
let factura = 0;

const destinos = {
    losClaveles: 1.60,
    trujillo: 2.50,
    deseosDeCatrina: 2.20,
    sidreria: 2.50,
    verde:2.20
}

sumar.on('click', sumando);
restar.on('click', restando);
destino.on('change', cuenta)

function sumando() {
    contador = contador + 1;
    display.text(contador);
    cuenta();

}

function restando() {
    if (contador > 0) {
        contador = contador - 1;
        display.text(contador);
        cuenta();
    }
}

function cuenta() {
    factura = contador * destinos[destino.val()];
    importe.text(factura.toFixed(2));

}