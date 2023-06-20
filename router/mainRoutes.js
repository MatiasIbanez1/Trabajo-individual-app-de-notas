const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers.js');

mainRoutes.get("/",mainController.index)
mainRoutes.get("/login",mainController.login)
mainRoutes.get("/mis-notas",mainController.mis-notas)

router.get('/', (req,res) =>
{
});
router.get('/detalle/:id',(req,res)=>{

});

module.exports = router;
