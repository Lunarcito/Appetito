const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index", {layout: false});
});


// GET // User Profile
router.get('/profile', isLoggedIn, (req, res) => {
  res.render('user/profile')
})


module.exports = router;
