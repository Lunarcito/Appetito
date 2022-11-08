const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();
const User = require("../models/User.model");
const Restaurant = require("../models/restaurant");
const Rate = require("../models/rate");



router.get('/restaurants' , async (req, res) => {
    try {
        const dbRestaurants = await Restaurant.find()
        res.render('restaurants/restaurant-list', { dbRestaurants })
    } catch (error) {
        console.log(error)
    }
})

// Ruta creada del restaurant-list al restaurantCard

router.get('/restaurants/restaurant-list' , async (req, res) => {
    try {
        const dbRestaurants = await Restaurant.find()
        res.render('restaurants/restaurantCard', { dbRestaurants })
    } catch (error) {
        console.log(error)
    }
})
  
router.get('/create-restaurant', (req, res) => {
    res.render('restaurants/restaurant-form', {options: ["Arabic", "Argentinian", "Bar", "Brazilian", "Burgers", "Chinese", "Korean", 
    "Brunch", "Indian", "Japanese", "Indian",  "Kebab", "Mexican", "Italian", "Poke", 
    "Sushi", "Vegan", "Vegetarian", "Vietnamese", "Coffee Shop", 'Steakhouse']})
  })

router.post('/create-restaurant', async (req, res) => {
    const {name, style, address, price, phonenumber, picture, instagram, wifi, coworking, delivery } = req.body
    try {
        const wifiT = Boolean(wifi)
        const cowork = Boolean(coworking)
        const deliv = Boolean(delivery)
        console.log(cowork)
        const newRestaurant = await Restaurant.create({name, style, address, price, phonenumber, picture, instagram, wifi: wifiT, coworking: cowork, delivery: deliv})
        console.log(newRestaurant)
       res.redirect('/restaurants') 
    } catch (error) {
        console.log(error)
    }
})


router.get("/restaurants/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId
    try {
      const restaurant = await Restaurant.findById(restaurantId)
      
      res.render("restaurants/restaurantCard", restaurant)
    } catch (err) {
      console.log(err)
    }
  })


  router.post('/restaurants/:restaurantId', async (req, res) => {
    const rate = req.body
    try {
        console.log(req.body)
        const user = req.session.currentUser
        const userId = user._id
        const restaurantId = req.params.restaurantId
        const restaurant = await Restaurant.findById(restaurantId)
        let rate = 0
        const review = req.body.review
        if (req.body.rate === "like") {
            rate = 1
        } else if (req.body.rate === "dislike") {
            rate = -1
        }

    } catch (error) {
        console.log(error)
    }
})


module.exports = router