const sumarTercios = $("#sumarTercios");
const restarTercios = $("#restarTercios");
const sumarBotellines = $("#sumarBotellines");
const restarBotellines = $("#restarBotellines");
const displayTercios = $("#contadorTercios");
const displayBotellines = $("#contadorBotellines");
const destino = $("#destino");
const importe = $("#importe");

let contadorTercios = 0;
let contadorBotellines = 0;
let factura = 0;

const destinos = {
    losClaveles: {
        tercio: 1.60,
        botellin:1.40
    },
    trujillo: {
        tercio: 2.50,
        botellin: 1.50
    } ,
    deseosDeCatrina: {
        tercio: 2.30,
        botellin: 1.50
    } ,
    sidreria: {
        tercio: 2.50,
        botellin: 1.50
    },
    verde: {
        tercio: 2.20,
        botellin: 1.50
    },
    galarzas: {
        tercio: 2.20,
        botellin: 1.50
    }
}

sumarTercios.on('click', ()=>contarTercios(true));
restarTercios.on('click', ()=>contarTercios(false));
sumarBotellines.on('click', ()=>contarBotellines(true));
restarBotellines.on('click', ()=>contarBotellines(false));
destino.on('change', cuenta);


function contarTercios(valor) {
    valor ? contadorTercios++ :
        contadorTercios > 0 ? contadorTercios-- : null ;
    displayTercios.text(contadorTercios);
    cuenta();

}

function contarBotellines(valor) {
    valor ? contadorBotellines++ :
        contadorBotellines > 0 ? contadorBotellines-- : null;
    displayBotellines.text(contadorBotellines);
    cuenta();

}


function cuenta() {
    factura = contadorTercios * destinos[destino.val()].tercio+contadorBotellines*destinos[destino.val()].botellin;
    importe.text(factura.toFixed(2));

}