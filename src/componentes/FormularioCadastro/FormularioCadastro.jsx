import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
    }

    handlerMudancaCategoria(evento){
        evento.stopPropagation();
        this.categoria = evento.target.value;
    }

    handlerMudancaTitulo(evento) {
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }
    handlerMudancaTexto(evento) {
        evento.stopPropagation();
        this.texto = evento.target.value;
    }

    criarNota(evento) {
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto, this.categoria);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this.criarNota.bind(this)}>
                <select
                    onChange={this.handlerMudancaCategoria.bind(this)}
                    className="form-cadastro__input">
                    <option>Sem Categoria</option>

                    {this.props.categorias.map((categoria) => {
                        return <option>{categoria}</option>;
                    })}
                </select>
                <input
                    className="form-cadastro__input"
                    type="text"
                    placeholder="Título"
                    onChange={this.handlerMudancaTitulo.bind(this)}
                />
                <textarea row={15}
                    className="form-cadastro__input"
                    placeholder="Escreva sua nota..."
                    onChange={this.handlerMudancaTexto.bind(this)}
                />
                <button className="form-cadastro__button form-cadastro__submit">Criar Nota</button>
            </form>
        );
    }
}


export default FormularioCadastro;

//  props == propriedades
