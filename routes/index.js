const express = require('express');
const router = express.Router();
const login = "admin";
const pass = "123";

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
 
router.get('/login', (req, res) => {
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {//check pass and login 
  const body = req.body;
  if (body.login === login && body.password === pass){
    req.session.admin = 1;
    res.redirect("./admin")
  }
 
  
  res.redirect('./login');
});
module.exports = router;
