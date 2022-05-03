import { VistaBotonPausaReanudar } from '../vistas/boton-pausa-reanudar.vista.js'

export class BotonPausaReanudar {
    #vista
    enPlay = true;
    #objetoMovil
    #reguladorVelocidad

    constructor(objetoMovil, reguladorVelocidad) {
        this.#objetoMovil = objetoMovil;
        this.#reguladorVelocidad = reguladorVelocidad
        this.#vista = new VistaBotonPausaReanudar(cb => {
            if (this.enPlay) {
                this.#pausar();
            } else {
                this.#reanudar();
            }
        });
    }

    #pausar() {
        this.enPlay = false;
        this.#reguladorVelocidad.deshabilitarDeslizador();
        this.#cambiarIcono();
    }

    #reanudar() {
        this.enPlay = true;
        this.#reguladorVelocidad.habilitarDeslizador();
        this.#cambiarIcono();
    }

    #cambiarIcono() {
        if (this.enPlay) {
            this.#vista.cambiarIcono(true);
        } else {
            this.#vista.cambiarIcono(false);
        }
    }
}