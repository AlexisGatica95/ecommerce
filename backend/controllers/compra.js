const express = require('express');
const router = express.Router();
const compraModel = require('../models/compraModel');

router.post('/',async(req,res,next)=> {
    //compra producto
    //re.id del usuario (token)
    let compra_ok = await compraModel.comprar(req.id);
    //retornar la url de mercadoPago

})

module.exports = router;