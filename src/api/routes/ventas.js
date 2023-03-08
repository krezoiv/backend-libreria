const express = require('express');
const router = express.Router();


const mysqlConnection = require('../connection/connection');

router.post('/', (req, res)=>{
    const {fecha, ventas_libreria, ventas_tienda, ventas_impresiones, ventas_refa } = req.body;
    mysqlConnection.query('CALL ventas_diarias(?,?,?,?,?)',
    [fecha, ventas_libreria, ventas_tienda, ventas_impresiones, ventas_refa ], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    })
})
module.exports = router;
//test