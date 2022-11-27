const express = require('express');
const path = require('path');
const router = express.Router();

//event 데이터 보관용 배열 import
let event = require("../data/event");
let eventData = event;

router.use((req, res, next) => {
	next();
});

//login.html 전송
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/calendar.html')) });

//로그인 기능 (userData와 대조)
router.get("/events", (req, res) => {
	res.json(eventData.events);
})

module.exports = router;
