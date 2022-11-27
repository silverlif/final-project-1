//import express, cors, body-parser
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//미들 웨어 설정
app.use(cors({
	origin:"*",
}));
app.use(express.json())
app.use(express.static('public'));

//import router/signup.js
const signup = require("./router/signup");
app.use('/signup', signup);

//import router/signup.js
const login = require("./router/login");
app.use('/', login);

//import router/calendar.js
const calendar = require("./router/calendar");
app.use('/calendar', calendar);

//import router/group.js
const group = require("./router/group");
app.use('/group', group);

//신호 대기
app.listen(port, () => {
	console.log("app started");
});