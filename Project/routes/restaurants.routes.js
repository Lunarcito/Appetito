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
      
      const counting = await Rate.find({restaurantId})
        let likes = 0
        let dislikes =0

    counting.forEach(ele=>{
        if(ele.rate === 1){
            likes++
        } else if (ele.rate ===-1){
            dislikes++
        }
    }
    )
console.log (likes)

      res.render("restaurants/restaurantCard", {restaurant, likes, dislikes} )
    } catch (err) {
      console.log(err)
    }
  })


  router.post('/restaurants/:restaurantId', isLoggedIn, async (req, res) => {
    try {
        const user = req.session.currentUser
        console.log("This is the user", user)
        const userId = user._id
        console.log("This is the userId", userId)
        const restaurantId = req.params.restaurantId
        
        const restaurant = await Restaurant.findById(restaurantId)
        console.log("This is the restaurantId", restaurant)
        let rate = 0
        const review = req.body.review
        if (req.body.rate === "like") {
            rate = 1
        } else if (req.body.rate === "dislike") {
            rate = -1
        }
        
   

        let newRate = await Rate.create({rate, review, userId, restaurantId})
        await User.findByIdAndUpdate(userId,{ $push: { rateIds: userId } })
        
        await Restaurant.findByIdAndUpdate(restaurantId,{ $push: { rateIds: restaurantId } })
        
        res.redirect('/restaurants') 

    } catch (error) {
        console.log(error)
    }
})


module.exports = router