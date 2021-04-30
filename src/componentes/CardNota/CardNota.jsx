import React, { Component } from 'react';
import './estilo.css'
import {ReactComponent as DeleteSVG} from '../../assets/img/delete.svg' // O nome deleteSVG deve ser maísculo para ser reconhecido == DeleteSVG

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <DeleteSVG/>
                <header className="card-nota__cabecalho">
                    <h3 className="card-nota__titulo">{this.props.titulo}</h3>
                </header>
                <p className="card-nota__texto">{this.props.texto}</p>
            </section>
        );
    }
}

export default CardNota;
