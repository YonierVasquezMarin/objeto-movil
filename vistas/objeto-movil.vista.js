export class VistaObjetoMovil {
    #nodo
    #marginIzqContenedor
    #marginIDerContenedor
    #anchoObjeto

    constructor() {
        this.#nodo = document.querySelector('#cuerpoMovil');
        
    }

    obtenerEspacioIzqBordePantalla() {
        this.#nodo.getBoundingClientRect().left;
    }

    obtenerEspacioDerBordePantalla() {
        this.#nodo.getBoundingClientRect().right;
    }

    obtenerMarginIzqObjeto() {
        let marginLeft = this.#nodo.style.marginLeft;
        marginLeft = marginLeft ? marginLeft : '0px';
        marginLeft = marginLeft.substr(0, marginLeft.length - 2); // quitar el 'px'
        marginLeft = parseInt(marginLeft);

        return marginLeft;
    }

    cambiarMarginIzqObjeto(nuevoMargen) {
        this.#nodo.style.marginLeft = `${marginLeft}px`;
    }
}