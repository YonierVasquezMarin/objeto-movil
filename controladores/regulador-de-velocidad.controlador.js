import { VistaReguladorDeVelocidad } from '../vistas/regulador-de-velocidad.vista.js'

export class ReguladorDeVelocidad {
    #vista
    #objetoMovil

    constructor(objetoMovil) {
        this.#vista = new VistaReguladorDeVelocidad();
        this.#objetoMovil = objetoMovil
    }

    habilitarDeslizador() {
        this.#vista.habilitarDeslizador();
    }

    deshabilitarDeslizador() {
        this.#vista.deshabilitarDeslizador();
    }
}