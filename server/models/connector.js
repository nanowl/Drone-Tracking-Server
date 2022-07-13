const mysql = require('mysql');
const conn = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'wjdduq1101!',
  database: 'antos'
};
const connection = mysql.createConnection(conn);

connection.connect(function(err) {
  if (err) throw err;
});
// connection.query('select * from users', (error, rows, fields) => {
//   if (error) throw error;
//   console.log('User info is: ', rows);
// });

module.exports = connection;
