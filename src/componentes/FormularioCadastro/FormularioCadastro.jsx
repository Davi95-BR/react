import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {

    constructor(){
        super();
        this.titulo =  "";
    }

    handlerMudancaTitulo(evento){
        this.titulo = evento.target.value
        console.log(this.titulo)
    }

    render() {
        return (
            <form className="form-cadastro">
                <input
                    className="form-cadastro__input"
                    type="text"
                    placeholder="Título"
                    onChange= {this.handlerMudancaTitulo}
                />
                <textarea row={15}
                    className="form-cadastro__input"
                    placeholder="Escreva sua nota..." />
                <button className="form-cadastro__button form-cadastro__submit">Criar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;
