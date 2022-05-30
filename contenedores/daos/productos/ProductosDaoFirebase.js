const { ContenedorFirebase } = require('../../ContenedorFirebase')

class productsDaoFirestore extends ContenedorFirebase {
  constructor(){
    super('products')
    this.id = 0
    this.checkId()
  }

  async checkIdProd(){
    let products = await this.getAll()
    if(products.length > 0) {
      this.id = parseInt(products[products.length - 1].id) + 1
    }
  }

  saveProd(product){
    if(product){
      console.log(product)
      this.save(product, this.id)
      this.id++
      return product
    } else {
      return 'No se guardó'
    }
  }

  updateProd(product, id){
    if(product) {
      console.log(product)
      this.update(product, id)
      return product
    } else {
      return 'No se realizó updade'
    }
  }
}

module.exports = { productsDaoFirestore }