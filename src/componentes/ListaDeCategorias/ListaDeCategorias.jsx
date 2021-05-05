import React, { Component } from "react";
import "./estilo.css";
class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]};

        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount(){              // Componente está sendo montado.
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){              // Componente está sendo montado.
        this.props.categorias.desinscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias});
    }


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
                    {this.state.categorias.map((categoria, index) => {
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


