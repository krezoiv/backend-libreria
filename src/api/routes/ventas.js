const express = require('express');
const router = express.Router();


const mysqlConnection = require('../connection/connection');

router.post('/', (req, res)=>{
    const {fecha } = req.body;
    mysqlConnection.query('CALL nueva_venta(?)',
    [fecha], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    })
})
module.exports = router;
//test