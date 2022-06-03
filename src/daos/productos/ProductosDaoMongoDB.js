const ContainerMongoDB = require('../../contenedores/ContenedorMongoDB')
const productosModel = require('../../models/peliculas')

class ProductoDaoMongo extends ContainerMongoDB{
  constructor() {
    super(productosModel);
  }
} 

module.exports = { ProductoDaoMongo }