const express = require('express')
const { Router } = express
const productRouter = Router()

const { ProductosDaoArchivo } = require('../contenedores/daos/productos/ProductosDaoArchivo')
const productoDao = new productoDaoArchivo()

//const { ProductosDaoMongo } = require('../contenedores/daos/productos/ProductosDaoMongoDB')
//const productoDao = new productoDaoMongoDB()

//const { ProductosDaoFirebase } = require('../../contenedores/daos/productos/ProductosDaoFirebase')
//const productoDao = new productoDaoFirestore()

productRouter.get('/', async (req, res) => {
  let productos = await productoDao.getAll();
  res.json({productos: productos})
})

productRouter.get('/:id', async (req, res) => {
  let user = await productoDao.getById(req.params.id)
  res.json({user})
})

productRouter.post('/', (req, res) => {
  let product = req.body

  if(product && product.name && product.email && product.age){
    product = productoDao.saveUser(product)
    res.json({result: 'Producto guardado', product: product})
  } else {
    res.json({result: 'No se pudo guardar el producto'})
  }
})

productRouter.delete('/:id', async (req, res) => {
  let { id } = req.params
  user = await productoDao.delete(id)
  res.json({result: 'Result', product_deleted: product})
})

productRouter.put('/:id', (req, res) => {
  let product = req.body 
  let response = productoDao.updateUser(product, req.params.id)
  res.json(response)
})

module.exports = productRouter