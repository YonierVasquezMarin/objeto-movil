import { VistaObjetoMovil } from "../vistas/objeto-movil.vista.js";

export class ObjetoMovil {
    #vista
    #direccion
    #enMovimiento
    #pixelsPorTiempo
    velocidad

    constructor() {
        this.#vista = new VistaObjetoMovil();
        this.#direccion = 'LTR';
        this.#enMovimiento = true;
        this.velocidad = 900;
    }

    detenerMovimiento() {
        this.#enMovimiento = false;
    }

    reanudarMovimiento() {
        this.#enMovimiento = true;
    }
}