const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'jgeamFestival'
})

db.connect((err) => {
  if (err) throw err;
  console.log('connect with jgeamFestival db')
})

module.exports = db;