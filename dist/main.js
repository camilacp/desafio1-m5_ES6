"use strict";

var _Cliente = _interopRequireDefault(require("./Cliente.js"));
var _Impuesto = require("./Impuesto.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuestoCliente = new _Impuesto.Impuestos(10000, 2000);
var clientePrueba = new _Cliente["default"]('Diego', impuestoCliente);

/*console.log(impuestoCliente.montoBrutoAnual, impuestoCliente.deducciones);
console.log(clientePrueba.nombre, clientePrueba.impuesto.montoBrutoAnual, clientePrueba.impuesto.deducciones); */
console.log(clientePrueba.calcularImpuesto());