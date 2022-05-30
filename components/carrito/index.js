const fs = require ('fs')

class Carrito{
    constructor(url,serial){
        this.url = url
        this.contador= 0;
        this.serial = serial
        this.array = []
    }
    getCart(){
        try {
            return JSON.parse(fs.readFileSync(`${this.url}`, "utf-8"))
        } catch (error) {
            throw new Error(error);
        }
    }
    getByIdCart(id){
            let arrayProducts =  this.getCart();
            return arrayProducts.find(product => product.id === id); 
    }
    addProdToCart(productCart){
        try {
            this.array = this.getCart()
            this.contador ++;
            newProducto.id = this.contador
            this.array.push(productCart)
            fs.writeFileSync(this.url, JSON.stringify(this.array))
        }
        catch (err) {
            console.log("No se pudo guardar en Carrito")
        }
    }
    async deleteByIdCart(id){
        let deleteId = await this.getCart();
        return deleteId.splice(2,`${id}`);
    }
};

module.exports = Carrito;