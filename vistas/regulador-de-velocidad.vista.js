export class VistaReguladorDeVelocidad {
    #nodo

    constructor(onChangeCallback) {
        this.#nodo = document.querySelector('#reguladorVelocidad');
        this.#nodo.addEventListener('change', onChangeCallback);
    }

    obtenerValorDeslizador() {
        return parseInt(this.#nodo.value);
    }
}