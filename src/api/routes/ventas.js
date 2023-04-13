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


router.post('/', (req, res)=> {
    const {fecha } = req.body;
    var sql = "CALL nueva_venta(?)";
    mysqlConnection.query(sql, [fecha], function(error, result){
        if(error){
            console.log("error en conexion");
        }else{
            res.json({status: false, message: "Aperturado" } )
        }
    })
})

router.post('/detalleVenta', (req, res) => {
    const {id_negocio, monto} = req.body;
    var sql = 'CALL detalleventa(?,?)';
    mysqlConnection.query(sql, [id_negocio, monto], function(error, result){
        if(error){
            console.log("error en conexion");
        }else{
            res.json({status: true, message: "Agregado" } )
        }
    })
})

router.post ('/listaDetVenta', (req, res) => {
    const {fecha} = req.body;
    //var sql = 'CALL mostrarVenta(?)';
    var sql = 'SELECT dv.monto, vt.fecha,ng.negocio from detalle_venta dv INNER JOIN ventas vt ON dv.idventas = vt.idventas INNER JOIN negocio ng ON ng.id_negocio = dv.id_negocio WHERE vt.fecha = ?;'
    mysqlConnection.query(sql, [fecha], function(error, result){
        if(error){
            console.log('error en conexion');
        }else{
            
            res.send(result)
        }
    })
})

router.get('/lastId', (req, res)=> {
    var sql = "SELECT idVentas FROM ventas ORDER BY idVentas DESC LIMIT 1;";
    mysqlConnection.query(sql, function(error, result){
        if(error){
            console.log("error en conexion");
        }else{
            res.send(result)
        }
    })

});





module.exports = router;
//test