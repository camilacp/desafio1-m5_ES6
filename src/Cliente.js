export default class Cliente {
    #nombre
    constructor(nombre, impuesto){
        this.#nombre = nombre;
        this.impuesto = impuesto;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(data){
        this.#nombre = data;
    }

    calcularImpuesto(){
        return (`El impuesto final a pagar del cliente ${this.#nombre} es de: ${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21}`); 
        }
}