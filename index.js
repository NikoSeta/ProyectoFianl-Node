const express = require('express');
const app = express();
const {Router} = express;
const router = Router();
const Container = require ('./components/productos');
const productos = new Container('./components/productos/productos.txt');

//Puerto 8080
let { puerto } = require ("./config") 
const PORT = puerto.port;

//express.json y urlencoded sirven para POST y PUT (enviar data al SV). 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//EJS
app.use('/api/productos', router);
app.use('/', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html")
});

app.get('/productos', function(req, res){
    let products = productos.getAll()
    res.render('index',{
        products: products
    })
});

app.post("/productos", (req, res)=>{
    try {
        const newProducto = req.body
        productos.save(newProducto)
        res.redirect("/")
    } catch (error) {
        console.log(error);
    }    
});

app.listen(PORT, ()=>{
    console.log(`Para ver los productos usar este link http://localhost:${PORT}/productos `);
});