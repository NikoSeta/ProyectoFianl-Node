const express = require('express');
const app = express();
const prodRouter = require('./src/routes/productos.js');
const cartRouter = require('./src/routes/cart.js')
const { puerto } = require ("./config") 
const PORT = puerto.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/productos', prodRouter);
app.use('/api/carrito', cartRouter);

app.listen(PORT, () => {
    console.log(`Para ver los productos usar este link http://localhost:${PORT}/productos `);
})