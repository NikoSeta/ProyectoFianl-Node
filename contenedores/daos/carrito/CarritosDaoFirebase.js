const { ContenedorFirebase } = require('../../ContenedorFirebase')

class CartDaoFirestore extends ContenedorFirebase {
  constructor(){
    super('products')
    this.id = 0
    this.checkId()
  }

  async checkId(){
    let products = await this.getAll()
    if(products.length > 0) {
      this.id = parseInt(products[products.length - 1].id) + 1
    }
  }

  addCart(product){
    if(product){
      console.log(product)
      this.save(product, this.id)
      this.id++
      return product
    } else {
      return 'No se guardó'
    }
  }

  updateCart(product, id){
    if(product) {
      console.log(product)
      this.update(product, id)
      return product
    } else {
      return 'No se realizó updade'
    }
  }
}

module.exports = { CartDaoFirestore }