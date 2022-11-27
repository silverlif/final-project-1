const express = require('express');
const path = require('path');
const router = express.Router();

//user 데이터 보관용 배열 import
let event = require("../data/event");
let eventsData = event.events;

router.use((req, res, next) => {
	next();
});

//login.html 전송
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/group.html')) });

router.post('/', (req, res) => {
	const reqId = Number(req.body.id);
	const eventInfo = eventsData.filter((events) => events.id === reqId)[0];
	res.json(JSON.stringify(eventInfo));
})


module.exports = router;
