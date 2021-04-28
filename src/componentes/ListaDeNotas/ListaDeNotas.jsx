import React, { Component } from 'react';
import CardNota from '../CardNota';
import "./estilo.css"

// -->  Componentes baseados em classes
class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {Array.of("Trabalho", "Lazer", "Estudos").map(index => {
                    return (
                        <li className="lista-notas__item" key={index}>
                            <CardNota />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaDeNotas;

