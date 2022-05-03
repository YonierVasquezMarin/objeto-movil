export class VistaReguladorDeVelocidad {
    #nodo

    constructor() {
        this.#nodo = document.querySelector('#reguladorVelocidad');
    }

    habilitarDeslizador() {
        this.#nodo.removeAttribute('disabled');
    }

    deshabilitarDeslizador() {
        this.#nodo.setAttribute('disabled', 'true');
    }
}