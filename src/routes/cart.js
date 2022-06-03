const express = require('express')
const { Router } = express
const cartRouter = Router()

const { CarritosDaoArchivo } = require('../contenedores/daos/carrito/CarritosDaoArchivo')
const cartDao = new CarritosDaoArchivo()

//const { CarritosDaoMongo } = require('../contenedores/daos/carrito/CarritosDaoMongoDB')
//const cartDao = new CarritosDaoMongo()

//const { CarritosDaoFirebase } = require('../contenedores/daos/carrito/CarritosDaoFirebase')
//const cartDao = new CarritosDaoFirebase()

cartRouter.get('/', async (req, res) => {
  let carts = await cartDao.getAll();
  res.json({carts: carts})
})

module.exports = cartRouter