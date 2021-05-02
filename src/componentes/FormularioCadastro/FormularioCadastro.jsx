import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
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
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <form className="form-cadastro"
                onSubmit={this.criarNota.bind(this)}>
                <select className="form-cadastro__input" placeholder="Selecione a categoria" required>
                    {this.props.categorias.map((categoria) => {
                        return (
                            <option >{categoria}</option>
                        );
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
