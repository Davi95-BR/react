import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {
    _handleEventoInput(e) {
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }
    render() {
        return (
            <section className="lista-categorias">
                <input
                    type="text"
                    className="lista-categorias__input"
                    placeholder="Adicionar Categoria"
                    onKeyUp={this._handleEventoInput.bind(this)}
                />
                <ul className="lista-categorias__lista">
                    {this.props.categorias.map((categoria, index) => {
                        return (
                            <li key={index} className="lista-categorias__item">
                                {categoria}
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default ListaDeCategorias;


