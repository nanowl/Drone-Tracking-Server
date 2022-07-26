const conn = require('./connector');
const fs = require('fs')

//데이터 삽입
function setData(req, res) {
    var sql = "insert into dronedata set ?";
    conn.query(sql, req.body,function (err, rows, fields) {
        if(err) {
        console.log(req.body + err);
        }
        console.log(req.body);
    });
}

module.exports = {
  setData
}
