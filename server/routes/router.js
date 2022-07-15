const express = require('express');
const router = express.Router();

const test = require('../controller/testController.js');

// 여기에 라우터 작성
router.get('/', test.getTest);
router.post("/", test.postTest);
router.delete("/", test.deleteTest);

module.exports = router;    //라우터를 메인 소스코드에서 활용할 수 있게 export
