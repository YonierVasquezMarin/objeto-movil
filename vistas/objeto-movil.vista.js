export class VistaObjetoMovil {
    #nodo
    marginIzqContenedor = 52;
    marginDerContenedor = 30;
    anchoObjeto = 55;

    constructor() {
        this.#nodo = document.querySelector('#cuerpoMovil');
    }

    obtenerEspacioIzqBordePantalla() {
        return this.#nodo.getBoundingClientRect().left;
    }

    obtenerEspacioDerBordePantalla() {
        return (screen.width - this.#nodo.getBoundingClientRect().left);
    }

    obtenerMarginIzqObjeto() {
        let marginLeft = this.#nodo.style.marginLeft;
        marginLeft = marginLeft ? marginLeft : '0px';
        marginLeft = marginLeft.substr(0, marginLeft.length - 2); // quitar el 'px'
        marginLeft = parseInt(marginLeft);

        return marginLeft;
    }

    cambiarMarginIzqObjeto(nuevoMargen) {
        this.#nodo.style.marginLeft = `${nuevoMargen}px`;
    }
}