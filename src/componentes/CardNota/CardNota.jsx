import React, { Component } from 'react';
import './estilo.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'
class CardNota extends Component {

    apagar(){
        const indice = this.props.indice;
        this.props.apagarNota(indice)
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota__cabecalho" >
                    <h3 className="card-nota__titulo">{this.props.titulo}</h3>
                </header>
                <p className="card-nota__texto">{this.props.texto}</p><br></br>
                <DeleteSVG onClick={this.apagar.bind(this)}/>
            </section>
        );
    }
}

export default CardNota;
