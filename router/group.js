const express = require('express');
const path = require('path');
const router = express.Router();

//event 데이터 보관용 배열 import
let event = require("../data/event");
let eventsData = event.events;

//group 데이터 보관용 배열 import
let group = require("../data/group");
let groupData = group.groups;


router.use((req, res, next) => {
	next();
});

//login.html 전송
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/group.html')) });

router.post('/', (req, res) => {
	const reqId = Number(req.body.id);
	const eventInfo = eventsData.filter((event) => event.id === reqId)[0];
	res.json(JSON.stringify(eventInfo));
})

//createGroup.html 전송
router.get('/createGroup', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/createGroup.html'))});

//팀 생성 기능 (userData에 값 저장)
router.post('/createGroup', (req, res) => {
	groupData.push(req.body);
	res.json(JSON.stringify({ result: true }));
})

router.post('/groupList', (req, res) => {
	const reqId = req.body.id;
	const groupInfo = groupData.filter((group) => group.eventId === reqId);
	res.send(groupInfo);
})


module.exports = router;
