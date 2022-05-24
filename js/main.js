const sumarTercios = $("#sumarTercios");
const restarTercios = $("#restarTercios");
const sumarBotellines = $("#sumarBotellines");
const restarBotellines = $("#restarBotellines");
const displayTercios = $("#contadorTercios");
const displayBotellines = $("#contadorBotellines");
const destino = $("#destino");
const importe = $("#importe");
const pagar = $(".pagar");

let contador = {
  tercio: 0,
  botellin: 0,
};

let factura = 0;

const destinos = {
  losClaveles: {
    tercio: 1.6,
    botellin: 1.4,
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
};

sumarTercios.on("click", () => contarTercios(true));
restarTercios.on("click", () => contarTercios(false));
sumarBotellines.on("click", () => contarBotellines(true));
restarBotellines.on("click", () => contarBotellines(false));
destino.on("change", cuenta);
pagar.on("click", borrar);

mostrar();
cuenta();

function mostrar() {
  const caja = JSON.parse(localStorage.getItem("contador"));
  if (!caja) {
    return;
  }
  pagar.text("Pagar");
  pagar.removeClass("no-display");
  displayTercios.text(caja.tercio);
  displayBotellines.text(caja.botellin);
}

function contarTercios(valor) {
  if (!JSON.parse(localStorage.getItem("contador"))) {
    localStorage.setItem("contador", JSON.stringify(contador));
    valor ? contador.tercio++ : contador.tercio > 0 ? contador.tercio-- : null;
    localStorage.setItem("contador", JSON.stringify(contador));
  } else {
    const caja = JSON.parse(localStorage.getItem("contador"));
    valor ? caja.tercio++ : caja.tercio > 0 ? caja.tercio-- : null;
    localStorage.setItem("contador", JSON.stringify(caja));
  }
  mostrar();
  cuenta();
}
function contarBotellines(valor) {
  if (!JSON.parse(localStorage.getItem("contador"))) {
    localStorage.setItem("contador", JSON.stringify(contador));
    valor
      ? contador.botellin++
      : contador.botellin > 0
      ? contador.botellin--
      : null;
    localStorage.setItem("contador", JSON.stringify(contador));
    const { botellin } = JSON.parse(localStorage.getItem("contador"));
    displayBotellines.text(botellin);
  } else {
    const caja = JSON.parse(localStorage.getItem("contador"));
    valor ? caja.botellin++ : caja.botellin > 0 ? caja.botellin-- : null;
    localStorage.setItem("contador", JSON.stringify(caja));
  }
  mostrar();
  cuenta();
}

function cuenta() {
  const caja = JSON.parse(localStorage.getItem("contador"));
  if (!caja) {
    return;
  }
  factura =
    caja.tercio * destinos[destino.val()].tercio +
    caja.botellin * destinos[destino.val()].botellin;
  importe.text(factura.toFixed(2));
}

function borrar() {
  contador = {
    tercio: 0,
    botellin: 0,
  };
  localStorage.setItem("contador", JSON.stringify(contador));
  mostrar();
  cuenta();
  localStorage.removeItem("contador");
  pagar.text("");
  pagar.addClass("no-display");
  destino.val("");
}
