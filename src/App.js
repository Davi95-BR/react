import React from 'react';
import ListaDeNotas from './componentes/listaDeNotas.jsx'

function App() {
  return (
  <section>
    <form>
      <input type="text"placeholder="Título"/>
      <textarea placeholder="Escreva sua nota..."/>
      <button>Criar Nota</button>
    </form>  
   <ListaDeNotas/>
  </section>
  );
}

export default App;

// react -> lib o desenho da interface
// React -> ecossistema complexo
