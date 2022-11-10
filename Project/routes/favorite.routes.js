const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const User = require("../models/User.model");
const Restaurant = require("../models/restaurant");
const Rate = require("../models/rate");
const Favorite = require("../models/favorite");


router.get("/favorites" , isLoggedIn, async (req, res) => {
  const userId = req.session.currentUser
    try {
        const dbFavorites = await Favorite.find({user: userId}).populate("restaurant")
        console.log(dbFavorites)
        res.render("restaurants/restaurantFavorites" , { dbFavorites })
    } catch (error) {
        console.log(error)
    }
})


router.post('/favorites/:favoriteId/delete', async (req, res) => {
    const favoriteId = req.params.favoriteId
    try {
       const dbFavorite = await Favorite.findOneAndDelete({favoriteId})
       res.redirect('/favorites') 
    } catch (error) {
        console.log(error)
    }
})


module.exports = router