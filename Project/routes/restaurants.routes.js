const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const isLoggedIn = require('../middleware/isLoggedIn');
const isLoggedOut = require('../middleware/isLoggedOut');
const router = express.Router();
const User = require("../models/User.model");
const Restaurant = require("../models/restaurant");
const Rate = require("../models/rate");
const Favorite = require("../models/favorite");
const Review = require('../models/review')




router.get('/restaurants' , isLoggedIn, async (req, res) => {
    try {
        const dbRestaurants = await Restaurant.find()
        res.render('restaurants/restaurant-list', { dbRestaurants , options: ["Arabic", "Argentinian", "Bar", "Brazilian", "Burgers", "Chinese", "Korean", 
        "Brunch", "Indian", "Japanese", "Indian",  "Kebab", "Mexican", "Italian", "Poke", 
        "Sushi", "Vegan", "Vegetarian", "Vietnamese", "Coffee Shop", 'Steakhouse']})
    } catch (error) {
        console.log(error)
    }   
})

router.get('/create-restaurant' , isLoggedIn, isAdmin, (req, res) => {
    res.render('restaurants/restaurant-form', {options: ["Arabic", "Argentinian", "Bar", "Brazilian", "Burgers", "Chinese", "Korean", 
    "Brunch", "Indian", "Japanese", "Indian",  "Kebab", "Mexican", "Italian", "Poke", 
    "Sushi", "Vegan", "Vegetarian", "Vietnamese", "Coffee Shop", 'Steakhouse']})
  })



router.get('/restaurants/style', async (req, res) => {
    const styleId = req.query.style
    console.log(styleId)
    try {
        let dbRestaurants = await Restaurant.find({style: styleId})
        res.render('restaurants/restaurant-list', { dbRestaurants, options: ["Arabic", "Argentinian", "Bar", "Brazilian", "Burgers", "Chinese", "Korean", 
        "Brunch", "Indian", "Japanese", "Indian",  "Kebab", "Mexican", "Italian", "Poke", 
        "Sushi", "Vegan", "Vegetarian", "Vietnamese", "Coffee Shop", 'Steakhouse'] })
    } catch (error) {
        console.log(error)
    }
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


router.get("/restaurants/:restaurantId", isLoggedIn, async (req, res) => {
    const restaurantId = req.params.restaurantId
    try {
        const restaurant = await Restaurant.findById(restaurantId)

        // const counting = await Rate.find({restaurantId})
        const counting = await Rate.find({restaurant: restaurantId})

        //const ratesDB = await Rate.find({restaurant: restaurantId})
        let likes = 0
        let dislikes = 0


        counting.forEach(ele=>{
        if(ele.rate === 1){
            likes++
        } else if (ele.rate ===-1){
            dislikes++
        }  
    },

    ),
        res.render("restaurants/restaurantCard", {restaurant, likes, dislikes, layout: false} )

    } catch (error) {
        console.log(error)
    }
  })
 

router.post('/restaurants/:restaurantId/like', async (req, res) => {
    try {
        const user = req.session.currentUser
        const userId = user._id
        const restaurantId = req.params.restaurantId
        const rate = 1

        let rateDB = await Rate.find({restaurant: restaurantId, user: userId})
        if (rateDB.length === 0) {

            let newRate = await Rate.create({rate, restaurant: restaurantId, user: userId})
            await User.findByIdAndUpdate(userId,{ $push: { rateIds: newRate._id} })
            await Restaurant.findByIdAndUpdate(restaurantId, { $push: { rateIds: newRate._id} })
            
            res.redirect(`/restaurants/${restaurantId}`) 
        } else {
            res.redirect(`/restaurants/${restaurantId}`)
        }
        

    } catch (error) {
        console.log(error)
    }
})

router.post('/restaurants/:restaurantId/dislike', async (req, res) => {
    try {
        const user = req.session.currentUser
        const userId = user._id
        const restaurantId = req.params.restaurantId
        const rate = -1

        let rateDB = await Rate.find({restaurant: restaurantId, user: userId})

        if (rateDB.length === 0) {
            let newRate = await Rate.create({rate, restaurant: restaurantId, user: userId})
            await User.findByIdAndUpdate(userId,{ $push: { rateIds: newRate._id} })
            await Restaurant.findByIdAndUpdate(restaurantId, { $push: { rateIds: newRate._id} })
            
            res.redirect(`/restaurants/${restaurantId}`) 
        } else {
            res.redirect(`/restaurants/${restaurantId}`)
        }

    } catch (error) {
        console.log(error)
    }
}),


router.post("/favorite/:restaurantId", async (req, res) => {
    const restaurantId = req.params.restaurantId
    const user = req.session.currentUser
    
    try {

    let rateDB = await Favorite.find({restaurant: restaurantId, user: user._id})
    if (rateDB.length === 0) {
        let newFavorite = await Favorite.create({user: user._id, restaurant: restaurantId})
        res.redirect(`/restaurants/${restaurantId}`)
    } else {
        res.redirect(`/restaurants/${restaurantId}`)
    }

} catch (error) {
    console.log(error)
}   
}),


// POST to review

router.post('/restaurants/:restaurantId/review', async (req, res) => {
    try {
        const user = req.session.currentUser
        const userId = user._id
        const restaurantId = req.params.restaurantId
        const { review } = req.body
        

        let reviewDb = await Review.find({restaurant: restaurantId, user: userId})
        if (reviewDb.length === 0) {
            let newReview = await Review.create({user: user._id, restaurant: restaurantId, review})
            await User.findByIdAndUpdate(userId,{ $push: { reviews: newReview._id} })
            await Restaurant.findByIdAndUpdate(restaurantId, { $push: { reviews: newReview._id} })
            
            res.redirect(`/restaurants/${restaurantId}`)
        } else {
            res.redirect(`/restaurants/${restaurantId}`)
        }
    } catch (error) {
        console.log(error)
    }
})

router.get('/restaurants/price/:price', async (req, res) => {
    const priceId = req.params.price

    try {
        let dbRestaurants = await Restaurant.find({price: priceId})
        res.render('restaurants/restaurant-list', { dbRestaurants, options: ["Arabic", "Argentinian", "Bar", "Brazilian", "Burgers", "Chinese", "Korean", 
        "Brunch", "Indian", "Japanese", "Indian",  "Kebab", "Mexican", "Italian", "Poke", 
        "Sushi", "Vegan", "Vegetarian", "Vietnamese", "Coffee Shop", 'Steakhouse'] })
    } catch (error) {
        console.log(error)
    }
})



module.exports = router

