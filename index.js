const express = require("express");

//user 데이터 보관을 위한 객체 생성 함수
function user_struct(LoginId, Password, Name, Birth, Belong, Email) {
	let object = {
		loginId: LoginId,
		password: Password,
		name: Name,
		birth: Birth,
		belong: Belong,
		email: Email,
	}
	return object;
}

const app = express();
const port = 3000;
app.use(express.json())
app.use(express.static('public'));

//user 데이터 보관용 배열 선언
let userData = [];

app.post('/signup', (req, res) => {
	userData.push(req.body);
	console.log(userData);
	res.sendStatus(200);
})

app.listen(port, () => {
	console.log("app started");
})