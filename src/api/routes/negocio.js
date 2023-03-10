const express = require('express');
const router = express.Router();


const mysqlConnection = require('../connection/connection');

router.get('/', (req, res)=>{
   
    mysqlConnection.query('CALL listar_negocio',
     (err, rows, fields)=>{
        if(!err){
            res.json((rows));
        }else{
            console.log(err)
        }
    })
})
module.exports = router;
//test