const sumarTercios = $("#sumarTercios");
const restarTercios = $("#restarTercios");
const sumarBotellines = $("#sumarBotellines");
const restarBotellines = $("#restarBotellines");
const displayTercios = $("#contadorTercios");
const displayBotellines = $("#contadorBotellines");
const destino = $("#destino");
const importe = $("#importe");
const pagar = $(".pagar");

let factura = 0;

const destinos = {
  losClaveles: {
    tercio: 1.7,
    botellin: 1.5,
  },
  trujillo: {
    tercio: 2.75,
    botellin: 1.6,
  },
  deseosDeCatrina: {
    tercio: 2.4,
    botellin: 1.6,
  },
  sidreria: {
    tercio: 2.6,
    botellin: 1.6,
  },
  verde: {
    tercio: 2.4,
    botellin: 1.5,
  },
  pimpam: {
    tercio: 2.6,
    botellin: 0,
  },
};

sumarTercios.on("click", () => contarTer(true));
restarTercios.on("click", () => contarTer(false));
sumarBotellines.on("click", () => contarBot(true));
restarBotellines.on("click", () => contarBot(false));
destino.on("change", cuenta);
pagar.on("click", borrar);

getData();
mostrar();

function getData() {
  const load = JSON.parse(localStorage.getItem("contador"));
  if (!load) {
    const contador = {
      tercio: 0,
      botellin: 0,
    };
    localStorage.setItem("contador", JSON.stringify(contador));
  }
  const data = JSON.parse(localStorage.getItem("contador"));
  return data;
}

function mostrar() {
  const caja = JSON.parse(localStorage.getItem("contador"));
  displayTercios.text(caja.tercio);
  displayBotellines.text(caja.botellin);
}

function contarTer(num) {
  const valor = getData();
  num ? valor.tercio++ : valor.tercio > 0 ? valor.tercio-- : null;
  localStorage.setItem("contador", JSON.stringify(valor));
  pagar.removeClass("no-display");
  pagar.text("Pagar");
  mostrar();
  cuenta();
}
function contarBot(num) {
  const valor = getData();
  num ? valor.botellin++ : valor.botellin > 0 ? valor.botellin-- : null;
  localStorage.setItem("contador", JSON.stringify(valor));
  pagar.removeClass("no-display");
  pagar.text("Pagar");
  mostrar();
  cuenta();
}

function cuenta() {
  const caja = JSON.parse(localStorage.getItem("contador"));
  factura =
    caja.tercio * destinos[destino.val()].tercio +
    caja.botellin * destinos[destino.val()].botellin;
  importe.text(factura.toFixed(2));
}

function borrar() {
  localStorage.removeItem("contador");
  displayTercios.text(0);
  displayBotellines.text(0);
  importe.text(0);
  pagar.text("");
  pagar.addClass("no-display");
  destino.val("");
}
