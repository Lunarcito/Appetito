const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const User = require("../models/User.model");
const Restaurant = require("../models/restaurant");
const Rate = require("../models/rate");
const Favorite = require("../models/favorite");

router.post("/favorite/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId
    console.log(restaurantId)
    const user = req.session.currentUser
    console.log("This is the", user._id)
try {

    let rateDB = await Favorite.find({restaurant: restaurantId, user: user._id})
    if (rateDB.length === 0) {
        let newFavorite = await Favorite.create({user: user._id, restaurant:restaurantId})
        console.log(newFavorite)
        res.redirect("/favorites")
    }

} catch (error) {
    console.log(error)
}
}),

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



module.exports = router