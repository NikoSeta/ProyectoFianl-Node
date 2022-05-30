const { ContainerFile } = require('../../ContenedorArchivo')

class ProductosDaoFile extends ContainerFile {
    constructor() {
        super('../../data/products.json');
        let products = this.getAll();
        this.id = (products.length > 0) ? product[products.length -1].id + 1 : 1;
    }
    getAll() {
        let products = this.getContentFile();
        return products;
    }
}

module.exports = { ProductosDaoFile }