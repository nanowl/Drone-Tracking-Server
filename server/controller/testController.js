const db = require('../models/testService');
var sql;

module.exports = {
    getTest : async function (req, res, next)  {
        db.findAll(req, res);
    },
    postTest : async function (req, res, next)  {
        db.setData(req, res);
        res.json({"msg":"good"});
    },
    deleteTest : async function (req, res, next) {
        res.json({ "message" : "DELETE request to the test homepage" })
    }
}
