const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/hi', (req, res) => {
  let sql = "SELECT * FROM admin";
  db.query(sql,(err, result) => {
    if (err) console.log(err);
    console.log(result)
    res.send('hola perro');
  })
})

module.exports = router;