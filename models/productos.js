const mongoose = require("mongoose");

const productsCollection = 'products';

const ProductsSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    img: {type: String, required: true, max: 255},
    stock: {type: Number, required: true},
})

const productos = mongoose.model(productsCollection, ProductsSchema);

module.exports = productos