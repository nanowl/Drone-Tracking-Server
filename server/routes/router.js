const express = require('express');
const router = express.Router();

const conn = require('../controller/Controller.js');

// 여기에 라우터 작성
router.get('/dronedata', conn.findAll);
router.get("/lognum", conn.findAllNum);
router.get("/findall-id", conn.findAllId);
router.get("/drone/:droneid", conn.currentDrone);
router.get("/drone-log/:logNum", conn.currentLog);
router.get("/drone-record/:droneid", conn.droneRecord);
router.post("/drone-push", conn.setData);

module.exports = router;    //라우터를 메인 소스코드에서 활용할 수 있게 export
