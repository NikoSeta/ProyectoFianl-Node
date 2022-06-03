const fs = require('fs');

class ContainerFile {
    constructor(fileName) {
      this.fileName=fileName;
    }

    getAll() {
        let products = this.getContentFile();
        return products;
    }

    save(name, price, img) {
        let products = this.getAll();
        let product = {id:this.id, name: name, price: price, img: img}
        products.push(product);
        this.saveInFile(products);
        this.id++;
    }

    getById(id) {
        let products = this.getAll();
        let product = null;
        if(products.length > 0) {
            let element = products.find(elem => elem.id == id);
            if(element) {
                product = element;
            }
        }
        return product;
    }
    
    async deleteById(id) {
        const objs = await this.getAll()
        const index = objs.findIndex(o => o.id == id)
        if (index == -1) {
          throw new Error(`Error al borrar: no se encontró el id ${id}`)
        }
        objs.splice(index, 1)
        try {
          await fs.writeFile(this.ruta, JSON.stringify(objs, null, 2))
        } catch (error) {
          throw new Error(`Error al borrar: ${error}`)
        }
      }
  
      async deleteAll() {
        await fs.writeFile(this.ruta, JSON.stringify([], null, 2))
      }
}

module.exports = { ContainerFile }