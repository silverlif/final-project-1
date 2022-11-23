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
app.use('/signup', signup.router);

//import router/signup.js
const login = require("./router/login");
app.use('/', login.router);

//calender.html 전송
app.get('/calendar', (req, res) => { res.sendFile(__dirname + '/public/html/calendar.html') });	

//신호 대기
app.listen(port, () => {
	console.log("app started");
})

app.get("/events", (req, res) => {
	const events = [
		{
			title: "Event 1",
			start: "2022-11-05", 
			end: "2022-11-08",
			descriptopm: "example 1"
		},
	  	{
			title: "Event 2",
			start: "2022-11-15", 
			end: "2022-12-02",
			descriptopm: "example 2"
	  	},
	  	{
			title: "Event 3",
			start: "2022-12-08",
			end: "2022-12-10",
			descriptopm: "example 3"
	  	},
	];
  
	res.json(events);
  });