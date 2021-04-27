import React, { Component } from 'react';
import CardNota from './CardNota';

// -->  Componentes baseados em classes

class ListaDeNotas extends Component {
    render() {
        return (
            <ul>
                <li>
                 <CardNota/>
                </li>
                <li>
                 <CardNota/>
                </li>
                <li>
                 <CardNota/>
                </li>
            </ul>
        );
    }
}

export default ListaDeNotas;

