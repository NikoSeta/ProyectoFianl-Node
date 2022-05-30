const mongoose = require("mongoose");

const cartCollection = 'carrito';

const cartSchema = new mongoose.Schema({
    title: {type: String, required: true, max: 100},
    user: {type: String, required: true, max: 100},
    products: {type: String, required: true, max: 100},
    totalPrice: {type: Number, required: true}
});

const peliculas = mongoose.model(cartCollection, cartSchema);

module.exports = peliculas