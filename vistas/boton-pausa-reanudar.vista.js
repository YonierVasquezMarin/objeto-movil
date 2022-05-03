export class VistaBotonPausaReanudar {
    #nodo

    constructor(onClickCallback) {
        this.#nodo = document.querySelector('#btnPlay')

        this.#nodo.addEventListener('click', onClickCallback)
    }

    cambiarIcono(btnPlay) {
        let imagen = document.querySelector('#imgBtnPlay')

        if (btnPlay) {
            imagen.setAttribute('src', './resources/img/play.svg')
        } else {
            imagen.setAttribute('src', './resources/img/pause.svg')
        }
    }
}