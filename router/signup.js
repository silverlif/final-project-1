const express = require('express');
const path = require('path')
const router = express.Router();

//user 데이터 보관용 배열 선언
let userData = [];

router.use((req, res, next) => {
  next();
});

//signup.html 전송
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/signup.html')) });

//회원가입 기능 (userData에 값 저장)
router.post('/', (req, res) => {
	userData.push(req.body);
	res.json(JSON.stringify({ result: true }));
})

module.exports = {
	router,
	userData,
}