const mongoose = require("mongoose")
const Restaurant = require("../models/restaurant")

// Require the models,  Example: (-- const Book = require("../models/Book.model") --)

const MONGO_URI = "mongodb://localhost:27017/appetito"


const createSeeds = async function () {
  try {
    const connect = await mongoose.connect(MONGO_URI)
    console.log(`Connected to database: ${connect.connections[0].name}`)
    await Restaurant.create(Restaurants)

    // Clear DB,  Example: (-- const deleteAll = await Book.deleteMany() --)
    // console.log("Db clean")

    const dbClose = await mongoose.connection.close()
    console.log("Seeds created")
  } catch (err) {
    console.log(`Error creating the seeds: ${err}`)
  }
}


const Restaurants = [
  {
    name: "Two Schmucks",
    style: "Bar", 
    address: "Carrer de Joaquín Costa, 52, 08001 Barcelona",
    price: "€€",
    phonenumber: 685309575,
    picture: "https://www.theworlds50best.com/discovery/filestore/jpg/TwoSchmucks-Barcelona-Spain-02.jpg",
    instagram: "https://www.instagram.com/two.schmucks/?hl=es",
    wifi: true,
    coworking: false,
    delivery: false,
    petFriendly: true 
  },

  {
    name: "Paradiso",      
    style: "Bar", 
    address: "Carrer de Rera Palau, 4, 08003 Barcelona", 
    price: "€€",
    phonenumber: 933607222,
    picture: "https://paradiso.cat/wp-content/uploads/2020/05/the_cloud.jpg", 
    instagram: "https://www.instagram.com/paradiso_barcelona/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: false,
    petFriendly: true 

  },

  {
    name: "Bobby's Free",      
    style: "Bar", 
    address: "C/ de Pau Claris, 85, 08010 Barcelona", 
    price: "€€",
    phonenumber: 000000,
    picture: "https://www.gastronosfera.com/sites/default/files/uploads/gatronosfera_bobbydrink-53.jpg", 
    instagram: "https://www.instagram.com/bobbysfree/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: false,
    petFriendly: true 

  },

  {
    name: "Brasería La Selva Barcelona",      
    style: "Steakhouse", 
    address: "Carrer de la Indústria, 138, 08025 Barcelona", 
    price: "€€",
    phonenumber: 933487299,
    picture: "https://media.timeout.com/images/104717624/750/422/image.jpg", 
    instagram: "https://www.instagram.com/laselvabarcelona/", 
    wifi: true,
    coworking: false,
    delivery: true,
    petFriendly: false 

  },

  {
    name: "Casa Lolea",      
    style: "Bar", 
    address: "Carrer de Sant Pere Més Alt 49, 08003 Barcelona", 
    price: "€€",
    phonenumber: 936241016,
    picture: "https://www.lolea.com/wp-content/uploads/2020/12/casa-lolea-23-baja-1600x1200.jpg", 
    instagram: "https://www.instagram.com/casalolea/", 
    wifi: true,
    coworking: false,
    delivery: false,
    petFriendly: false 

  },

  {
    name: "Billy Brunch",      
    style: "Brunch", 
    address: "Carrer de Bailèn, 115, 08009 Barcelona ", 
    price: "€€",
    phonenumber: 000000,
    picture: "https://www.metropoliabierta.com/uploads/s1/19/19/48/6/aperturabilly.jpeg", 
    instagram: "https://www.instagram.com/billybrunch/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: false, 
    petFriendly: true,
  },
]


createSeeds()
