import { VistaReguladorDeVelocidad } from '../vistas/regulador-de-velocidad.vista.js'

export class ReguladorDeVelocidad {
    #vista
    #objetoMovil
    #delaysList

    constructor(objetoMovil) {
        this.#objetoMovil = objetoMovil
        this.#delaysList = [];
        this.#cargarListaDelays();
        this.#vista = new VistaReguladorDeVelocidad(this.#cambiarDelayObjeto);
    }

    #cargarListaDelays() {
        const TIEMPO_MAXIMO = 300;
        const FRAGMENTOS = 20;
        let j = TIEMPO_MAXIMO/FRAGMENTOS;

        for (let i = 1; i <= 20; i++) {
            this.#delaysList.push(j * i);
        }

        this.#objetoMovil.delayMovimiento = this.#delaysList[this.#delaysList.length-1];
    }

    #cambiarDelayObjeto = cb => {
        const valorDeslizador = this.#vista.obtenerValorDeslizador();
        const delayObjeto = this.#delaysList[this.#delaysList.length - valorDeslizador];

        this.#objetoMovil.delayMovimiento = delayObjeto;
    }
}