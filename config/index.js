require ("dotenv").config();

let puerto = {
    port: process.env.PORT
};

module.exports = {puerto};