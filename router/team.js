const express = require('express');
const path = require('path');
const router = express.Router();

//event 데이터 보관용 배열 import
let team = require("../data/team");
let teamData = team;

router.use((req, res, next) => {
  next();
});

//login.html 전송
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/team.html')) });

module.exports = router;
