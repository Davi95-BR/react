class Categorias {
    constructor(){
        this.categorias = [];
    }

    adicionarCategoria(novaCategoria){
        console.log(this.categorias)
        this.categorias.push(novaCategoria);
      }
}

export default  Categorias;