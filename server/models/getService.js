const conn = require('./connector');
const fs = require('fs')

//전체조회
function findAll(req, res) {
    var list =[]
    var sql = "select * from dronedata";
    conn.query(sql, function (err, rows, fields) {
        if(err) throw err;
        list = JSON.stringify({"rows":rows});
        fs.writeFileSync('findAll.json',  list);
        res.json(rows)
    });
}

//log번값만 조회
function findAllNum(req, res) {
    var list =[]
    var sql = "select logNum from dronedata";
    conn.query(sql, function (err, rows, fields) {
        if(err) throw err;
        for (var i=0; i<rows.length; i++) {
          list.push(rows[i]['logNum'])
        }
        res.json(list)
    });
}

//log번값만 조회
function findAllId(req, res) {
    var list =[]
    var sql = "select droneid from dronedata group by droneid";
    conn.query(sql, function (err, rows, fields) {
        if(err) throw err;
        for (var i=0; i<rows.length; i++) {
          list.push(rows[i]['droneid'])
        }
        res.json(list)
    });
}

// 해당 드론의 로그 최근 1개만 조회
function currentLog(req, res) {
    var id = req.params.logNum;
    var sql = "select * from dronedata where logNum = ?";
    conn.query(sql, id, function (err, rows, fields) {
        if(err) throw err;
        var json = {
          "logNum" : rows[0]['logNum'],
          "droneid" : rows[0]['droneid'],
          "lat": rows[0]['lat'],
          "lng": rows[0]['lng'],
          "time": rows[0]['time']
        }
        res.json(json)
    });
}

// 해당 드론의 최근 데이터 1개만 조회
function currentDrone(req, res) {
    var id = req.params.droneid;
    var sql = "select * from dronedata where droneid = ? order by time desc limit 0,1";
    conn.query(sql, id, function (err, rows, fields) {
        if(err) throw err;
        var json = {
            "logNum" : rows[0]['logNum'],
            "droneid" : rows[0]['droneid'],
            "lat": rows[0]['lat'],
            "lng": rows[0]['lng'],
            "time": rows[0]['time']
        }
        res.json(json)
    });
}

// 해당 드론의 최근 데이터 5개만 조회
function droneRecord(req, res) {
    var id = req.params.droneid;
    var sql = "select * from dronedata where droneid = ? order by time desc limit 0,5";
    conn.query(sql, id, function (err, rows, fields) {
        if(err) throw err;
        var json = {
            "logNum" : rows[0]['logNum'],
            "droneid" : rows[0]['droneid'],
            "lat": rows[0]['lat'],
            "lng": rows[0]['lng'],
            "time": rows[0]['time']
        }
        res.json(json)
    });
}


module.exports = {
    findAll,
    findAllNum,
    findAllId,
    currentDrone,
    currentLog,
    droneRecord
}
