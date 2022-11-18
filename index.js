const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors({
	origin:"*",
}));
app.use(express.json())
app.use(express.static('public'));

app.get('', (req, res) => { res.sendFile(__dirname + '/public/html/login.html') });
app.get('/signup', (req, res) => { res.sendFile(__dirname + '/public/html/signup.html') });
app.get('/calendar', (req, res) => { res.sendFile(__dirname + '/public/html/calendar.html') });

//user 데이터 보관용 배열 선언
let userData = [];

app.post('/signup', (req, res) => {
	userData.push(req.body);
	res.json(JSON.stringify({ result: true }));
})

app.get('/login', (req, res) => {
	let reqId = req.query.id;
	let reqPw = req.query.pw;
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

app.post('/login', (req, res) => {
	let reqId = req.body.id;
	let reqPw = req.body.pw;
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

app.listen(port, () => {
	console.log("app started");
})