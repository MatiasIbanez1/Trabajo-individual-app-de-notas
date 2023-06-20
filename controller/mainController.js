const path = require('path')
const fs = require('fs')
const productListPath = path.resolve(__dirname,"../database/products.json");
const productList = JSON.parse(fs.readFileSync(productListPath,'utf-8'));

const mainControllers = {
    index:(req,res)=> {
        res.render('index')
}
    }
module.exports = mainControllers;
