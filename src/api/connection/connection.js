 const mysql = require('mysql');

 const mysqlConnection = mysql.createConnection({
    host:'54.157.139.215',
    user: 'dbadmin',
    password: 'krezoiv1984' ,
    database: 'libreria',
    port: '3306'
 });

 mysqlConnection.connect(err => {
    if(err){
        console.log('Error en conexión: ', err)
    }else {
        console.log('database online')
    }
 });

 module.exports = mysqlConnection;