const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'javascript_lesson',
  database: 'javascript_lesson'
});

connection.connect(function(err) {
	if (err) throw err;
	console.log('Connected');
	const sql = 'insert into id_test value(2)';
	connection.query(sql, function (err, result) {  
	if (err) throw err;  
	console.log('insert success');  
	});
});