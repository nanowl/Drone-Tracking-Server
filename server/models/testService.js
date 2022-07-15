const conn = require('./connector');

//전체조회
function findAll(req, res) {
    var sql = "select * from user";
    conn.query(sql, function (err, rows, fields) {
        if(err) throw err;
        res.json({rows:rows});
    });
}
//데이터 삽입
function setData(req, res) {
    var sql = "insert into user set ?";
    conn.query(sql, req.body,function (err, rows, fields) {
        if(err) throw err;
        console.log("success insert data to database!!!");
    });
}

function deleteData(table, id) {
    var sql = "delete from ? where id = ?"
    conn.query(sql, table, id, function (err, rows, fields) {
       if(err) throw err;
        console.log('delete data : ' , table, ":", id);
    });
}

module.exports = {
    findAll,
    setData,
    deleteData
}