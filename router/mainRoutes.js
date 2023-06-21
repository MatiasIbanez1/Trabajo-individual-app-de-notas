const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainControllers.js');

router.get("/",mainController.index)
// router.get("/login",mainController.login)
// router.get("/mis-notas",mainController.mis-notas)

// router.get('/', (req,res) =>
// {
// });
// router.get('/detalle/:id',(req,res)=>{

// });

module.exports = router;
