import React, { Component } from "react";
import ListaDeNotas from "./componentes/ListaDeNotas";
import FormularioCadastro from "./componentes/FormularioCadastro";
import ListaDeCategorias from "./componentes/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/Categorias"
import ArrayDeNotas from "./dados/Nota";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
         categorias={this.categorias}
         criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;

// react -> lib o desenho da interface
// React -> ecossistema complexo
