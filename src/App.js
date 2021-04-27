import React, { Component } from "react";
import FormularioCadastro from "./componentes/FormularioCadastro.jsx";
import ListaDeNotas from "./componentes/ListaDeNotas.jsx";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;

// react -> lib o desenho da interface
// React -> ecossistema complexo
