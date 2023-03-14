const express = require('express');
const router = express.Router();


const mysqlConnection = require('../connection/connection');

/*router.get('/', (req, res)=>{
   
    mysqlConnection.query('CALL listar_negocio',
     (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err)
        }
    })
})*/

/**
 * 
 server.get("/api/student", (req, res) => {
    var sql = "SELECT * FROM student";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });
*/
router.get('/', (req, res)=> {
    var sql = "SELECT * FROM negocio";
    mysqlConnection.query(sql, function(error, result){
        if(error){
            console.log("error en conexion");
        }else{
            res.send(result)
        }
    })

})
module.exports = router;

 
 