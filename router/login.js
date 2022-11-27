const express = require('express');
const path = require('path');
const router = express.Router();

//user 데이터 보관용 배열 import
let user = require("../data/user");
let userData = user.userData;

router.use((req, res, next) => {
  	next();
});

//login.html 전송
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/login.html')) });

//로그인 기능 (userData와 대조)
router.post('/login', (req, res) => {
	const reqId = req.body.id;
	const reqPw = req.body.pw;
	let ok;
	userData.forEach(function (value) {
		ok = false;
		if (value.id === reqId && value.pw === reqPw) {
			ok = true;
		}
	})
	if (ok) {
		res.json({ result: true });
	} else {
		res.json({ result: false });
	}
})

module.exports = router;
