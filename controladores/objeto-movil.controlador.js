import { VistaObjetoMovil } from "../vistas/objeto-movil.vista.js";

export class ObjetoMovil {
    #vista
    #direccion
    #enMovimiento
    #pixelsPorTiempo
    #distanciaMinimaAceptada
    delayMovimiento

    #DistanciaBordeIzqContenedor
    #DistanciaBordeDerContenedor

    constructor() {
        this.#vista = new VistaObjetoMovil();
        this.#direccion = 'LTR';
        this.#enMovimiento = false;
        this.#pixelsPorTiempo = 10;
        this.#distanciaMinimaAceptada = 100;
        this.delayMovimiento = 100;
        // this.#moverObjeto();
    }

    detenerMovimiento() {
        this.#enMovimiento = false;
    }

    reanudarMovimiento() {
        this.#enMovimiento = true;
    }

    #calcularDistanciaBordesContenedor() {
        this.#DistanciaBordeIzqContenedor = this.#vista.obtenerEspacioIzqBordePantalla() - this.#vista.marginIzqContenedor;
        this.#DistanciaBordeDerContenedor = this.#vista.obtenerEspacioDerBordePantalla() - this.#vista.anchoObjeto - this.#vista.marginDerContenedor;
    }

    #calcularDireccion() {
        if (this.#direccion == 'LTR') {
            if (this.#DistanciaBordeDerContenedor < this.#distanciaMinimaAceptada) {
                this.#direccion = 'RTL';
            }
        } else {
            if (this.#DistanciaBordeIzqContenedor < this.#distanciaMinimaAceptada) {
                this.#direccion = 'LTR';
            }
        }
    }

    #cambiarMargenIzquirdo() {
        const margenIzquierdo = this.#vista.obtenerMarginIzqObjeto();

        if (this.#direccion == 'LTR') {
            this.#vista.cambiarMarginIzqObjeto(margenIzquierdo + this.#pixelsPorTiempo)
        } else {
            this.#vista.cambiarMarginIzqObjeto(margenIzquierdo - this.#pixelsPorTiempo)
        }
    }

    #moverObjeto() {
        setInterval(cb => {
            this.#calcularDistanciaBordesContenedor();
            this.#calcularDireccion();
            this.#cambiarMargenIzquirdo();
        }, this.delayMovimiento);
    }
}