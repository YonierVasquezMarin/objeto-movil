import { VistaBotonPausaReanudar } from '../vistas/boton-pausa-reanudar.vista.js'

export class BotonPausaReanudar {
    #vista
    #enEjecucion
    #objetoMovil

    constructor(objetoMovil) {
        this.#objetoMovil = objetoMovil;
        this.#vista = new VistaBotonPausaReanudar(this.#callbackOnClickBtn);
        this.#enEjecucion = false;
    }

    #pausar() {
        this.#enEjecucion = false;
        this.#objetoMovil.detenerMovimiento();
    }

    #reanudar() {
        this.#enEjecucion = true;
        this.#objetoMovil.reanudarMovimiento();
    }

    #cambiarIcono() {
        if (this.#enEjecucion) {
            this.#vista.cambiarIcono(false);
        } else {
            this.#vista.cambiarIcono(true);
        }
    }

    #callbackOnClickBtn = cb => {
        if (this.#enEjecucion) {
            this.#pausar();
        } else {
            this.#reanudar();
        }
        this.#cambiarIcono();
    }
}