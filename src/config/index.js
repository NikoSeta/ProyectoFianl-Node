require('dotenv').config()

const mongoDb = `${process.env.MONGO}://${$process.env.HOST}:${process.env.MONGO_URI}`

module.exports = {
  mongoDb,
  FIREBASE: process.env.FIREBASE || '',
  PORT: process.env.PORT || ''
}