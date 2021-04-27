import React, { Component } from 'react';

// -->  Componentes baseados em classes

class ListaDeNotas extends Component {
    render() {
        return (<ul>
            <li>
                <section>
                    <header>
                        <h3>Título</h3>
                    </header>
                    <p>Escreva sua nota</p>
                </section>
            </li>
            <li>
                <section>
                    <header>
                        <h3>Título</h3>
                    </header>
                    <p>Escreva sua nota</p>
                </section>
            </li>
        </ul>
        );
    }
}

export default ListaDeNotas;

