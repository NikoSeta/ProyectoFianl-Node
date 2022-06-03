const { ContainerFile } = require('../../contenedores/ContainerFile')

class CartDaoFile extends ContainerFile {
    constructor() {
        super('./src/data/users.json');
        let cart = this.getAll();
        this.id = (cart.length > 0) ? cart[cart.length -1].id + 1 : 1;
    }

    save(product, price) {
        let carts = this.getAll();
        let cart = {id:this.id, product: product, price: price}
        carts.push(cart);
        this.saveInFile(carts);
        this.id++;
	return cart
    }

    getAll() {
        let carts = this.getContentFile();
        return carts;
    }
}

module.exports = { CartDaoFile }