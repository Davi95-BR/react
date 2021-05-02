import React, { Component } from "react";
import "./estilo.css"

class ListaDeCategorias extends Component {

    _handlerEventoInput(e) {
        if(e.key == "Enter"){
            console.log("adiconar categoria")
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <input
                    className="lista-categorias__input" type="text"
                    placeholder="Adicionar categoria"
                    onKeyUp={this._handlerEventoInput.bind(this)}
                />
                <ul className="lista-categorias__lista">
                    <li className="lista-categorias__item" >Categorias</li>
                    <li className="lista-categorias__item">Categorias</li>
                    <li className="lista-categorias__item">Categorias</li>
                    <li className="lista-categorias__item">Categorias</li>
                </ul>
            </section>
        );
    }
}

export default ListaDeCategorias;