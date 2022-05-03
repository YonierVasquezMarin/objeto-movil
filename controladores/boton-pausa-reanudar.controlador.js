import { VistaBotonPausaReanudar } from '../vistas/boton-pausa-reanudar.vista.js'

export class BotonPausaReanudar {
    #vista
    enPlay = true;
    #objetoMovil

    constructor(objetoMovil) {
        this.#objetoMovil = objetoMovil;
        this.#vista = new VistaBotonPausaReanudar(this.callbackOnClickBtn);
    }

    #pausar() {
        this.enPlay = false;
        this.#cambiarIcono();
    }

    #reanudar() {
        this.enPlay = true;
        this.#cambiarIcono();
    }

    #cambiarIcono() {
        if (this.enPlay) {
            this.#vista.cambiarIcono(true);
        } else {
            this.#vista.cambiarIcono(false);
        }
    }

    callbackOnClickBtn = cb => {
        if (this.enPlay) {
            this.#pausar();
        } else {
            this.#reanudar();
        }
    }
}