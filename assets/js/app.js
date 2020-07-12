//app.js

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'javascript_lesson',
  database: 'javascript_lesson'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});