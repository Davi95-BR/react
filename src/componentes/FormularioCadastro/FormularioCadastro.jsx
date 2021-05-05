import React, { Component } from 'react';
import "./estilo.css";

class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
        this.categoria = "Sem categoria";
        this.state = { categorias: [] };

       this._novasCategorias = this._novasCategorias.bind(this); 
    }

    componentDidMount() {                                                // Componente a ser montado
        this.props.categorias.inscrever(this._novasCategorias);
    
    }

    componentWillUnmount(){                                             // Componente a ser desmontado
        this.props.categorias.desinscrever(this._novasCategorias);                                             // Componente a ser desmontado
    }
        

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias });
    }

    handlerMudancaCategoria(evento) {
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
                    {this.state.categorias.map((categoria, index) => {
                        return <option key={index}>{categoria}</option>;
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
