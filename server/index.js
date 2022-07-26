const express = require('express');
const app = express();
const morgan = require('morgan');

const mainRouter = require('./routes/router');  //라우터 파일을 임포트
const bodyparser = require('body-parser');

const connection = require('./models/connector');

app.use(morgan('common'));
app.use(bodyparser.urlencoded({ extended: false }));    // 쿼리 스트링 형식 바디 파싱
app.use(bodyparser.json()); // json 형식 바디 파싱

app.set('views', __dirname + '/views'); // views 폴더에서 ejs 템플릿을 가져오게 설정
app.set('view engine', 'ejs');          // 템플릿 엔진을 ejs로 설정

app.use('/', mainRouter);   // / 경로에 router.js 파일의 라우트들을 할당


app.listen(3000, () => {            // 3000번 포트로 요청 수신
  console.log('Server started at http://localhost:3000');
});
