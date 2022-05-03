import { ObjetoMovil } from './objeto-movil.controlador.js'
import { ReguladorDeVelocidad } from './regulador-de-velocidad.controlador.js'
import { BotonPausaReanudar } from './boton-pausa-reanudar.controlador.js'

export class Tablero {
    #objetoMovil
    #reguladorDeVelocidad
    #botonPausaReanudar

    constructor() {
        this.#objetoMovil = new ObjetoMovil();
        this.#reguladorDeVelocidad = new ReguladorDeVelocidad(this.#objetoMovil);
        this.#botonPausaReanudar = new BotonPausaReanudar(this.#objetoMovil, this.#reguladorDeVelocidad);
    }
}