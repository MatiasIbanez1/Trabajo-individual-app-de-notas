const path = require('path')
const fs = require('fs')
//const productListPath = path.resolve(__dirname,"../database/products.json");
//const productList = JSON.parse(fs.readFileSync(productListPath,'utf-8'));

//app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, 'views/index.ejs'))
//
//app.get('/login', function (req, res) {
    // res.sendFile(path.join(__dirname, 'views/login.html'))
//
// app.get('/mis-notas', function (req, res) {
//     res.sendFile(path.join(__dirname,"views/mis-notas.html"))
// })

const mainControllers = {
    index:(req,res)=> {
        res.render('index')
}
    }
module.exports = mainControllers;
