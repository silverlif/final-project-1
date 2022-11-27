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
router.get('/', (req, res) => { res.sendFile(path.join(__dirname + '/../public/html/group.html')) });


module.exports = router;
