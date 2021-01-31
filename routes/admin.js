const express = require('express');
const { NotExtended } = require('http-errors');
const router = express.Router();

router.all('*', (req, res, next) => { // all admin sessions get this
  if (!req.session.admin){
    res.redirect('login');
    return;
  }
  
  next();
});

/* GET home page. */
router.get('/', (req, res) => {
  res.render('admin', { title: 'Admin' });
});
 
module.exports = router;