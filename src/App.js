import React, { Component } from "react";
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeNotas from "./componentes/ListaDeNotas";
import './assets/index.css';
import "./assets/App.css"

class App extends Component {

  criarNota(titulo, texto) {
    console.log('uma nova nota foi criada' + " " + titulo + " " + texto);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro  criarNota={this.criarNota}/>
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;

// react -> lib o desenho da interface
// React -> ecossistema complexo
