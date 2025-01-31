const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const isLoggedOut = require("../middleware/isLoggedOut");
const router = express.Router();

/* GET home page */
router.get("/", isLoggedOut, (req, res, next) => {
  res.render("index", {layout: false});
});


// GET // User Profile
router.get('/profile', isLoggedIn, (req, res) => {
  const user = req.session.currentUser
  console.log(user) 
  res.render('user/profile', {user})
})


module.exports = router;
