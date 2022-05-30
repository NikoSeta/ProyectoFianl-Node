const { MONGO_URI } = require('../config/globals')
const mongoose = require('mongoose')

class ContainerMongo {
  constructor(model) {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }, () => console.log('Connected'))
    this.model = model;
  }

  async getAll(){
    return await this.model.find()
  }
}

module.exports = ContainerMongo;