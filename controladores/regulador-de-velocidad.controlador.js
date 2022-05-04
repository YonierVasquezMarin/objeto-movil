import { VistaReguladorDeVelocidad } from '../vistas/regulador-de-velocidad.vista.js'

export class ReguladorDeVelocidad {
    #vista
    #objetoMovil

    constructor(objetoMovil) {
        this.#vista = new VistaReguladorDeVelocidad(this.#cambiarDelayObjeto);
        this.#objetoMovil = objetoMovil
    }

    #cambiarDelayObjeto = cb => {
        const delays = [
            75, 150, 225, 300, 375, 450, 525, 600, 675, 750,
            825, 900, 975, 1050, 1125, 1200, 1275, 1350, 1425, 1500
        ];

        let delayObjeto = 1500;

        const valorDeslizador = this.#vista.obtenerValorDeslizador();
        delayObjeto = delays[delays.length - valorDeslizador];

        this.#objetoMovil.delayMovimiento = delayObjeto;
    }
}