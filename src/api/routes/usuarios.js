const express = require('express');
const router = express.Router();

const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    mysqlConnection.query('select * from usuario', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    })
});

router.post('/signin', (req, res) => {
    const { usuario, password } = req.body;
    mysqlConnection.query('select usuario from usuario where usuario=? and password=?',
        [usuario, password],
        (err, rows, fields) => {
            if (!err) {
                if (rows.length > 0) {
                    let data = JSON.stringify(rows[0]);
                    const token = jwt.sign(data, 'krezoiv');
                    res.json({ token });
                } else {
                    res.json('Usuario o clave incorrectos')
                }
            } else {
                console.log(err);
            }
        })
})

router.post('/test', verifyToken, (req, res) => {
    res.json('Información secreta')
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) return res.status(401).json('No autorizado')

    const token = req.headers.authorization.substr(7);
    if (token !== '') {
        const content = jwt.verify(token, 'krezoiv');
        req.data = content;
        next();
    }else{
        res.status(401).json('token vacio')
    }
}

module.exports = router;
//test