const fs = require ('fs')

class Container{
    constructor(url){
        this.url = url
        this.contador= 0;
        this.array = []
    }
    getAll(){
        try {
            return JSON.parse(fs.readFileSync(`${this.url}`, "utf-8"))
        } catch (error) {
            throw new Error(error);
        }
    }
    getById(id){
            let arrayProducts =  this.getAll();
            return arrayProducts.find(product => product.id === id); 
    }
    addProd(newProducto){
        try {
            this.array = this.getAll()
            this.contador ++;
            newProducto.id = this.contador
            this.array.push(newProducto)
            fs.writeFileSync(this.url, JSON.stringify(this.array))
        }
        catch (err) {
            console.log("No se pudo guardar el archivo")
        }
    }
    async modifyProd(id){
        let array = await this.getAll();
        let modifyProd = array.map(p => p.id === id ? { ...p, nombre: "Lapiz de color", precio: 11, url: " " } : p);
        fs.appendFileSync.splice(`${this.url}`, `${modifyProd}`);
        return 
    }
    async deleteById(id){
        let deleteId = await this.getAll();
        return deleteId.splice(2,`${id}`);
    }
};

module.exports = Container;