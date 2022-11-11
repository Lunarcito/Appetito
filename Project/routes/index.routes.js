const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


// GET // User Profile
router.get('/profile', isLoggedIn, (req, res) => {
  const user = req.session.currentUser

  res.render('user/profile', {user})
})


module.exports = router;
