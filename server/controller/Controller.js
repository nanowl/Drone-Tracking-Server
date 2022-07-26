const get = require('../models/getService');
const post = require('../models/postService');
var sql;

module.exports = {
    findAll : async function (req, res, next)  {
        get.findAll(req, res);
    },
    findAllNum : async function (req, res, next)  {
        get.findAllNum(req, res);
    },
    findAllId : async function (req, res, next)  {
        get.findAllId(req, res);
    },
    currentDrone : async function (req, res, next)  {
        get.currentDrone(req, res);
    },
    currentLog : async function (req, res, next)  {
        get.currentLog(req, res);
    },
    droneRecord : async function (req, res, next)  {
        get.droneRecord(req, res);
    },
    setData : async function (req, res, next)  {
        post.setData(req, res);
        res.json({"msg":"good"});
    }
}
