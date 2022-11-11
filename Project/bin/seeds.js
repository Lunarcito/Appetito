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
    petFriendly: true,

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
    petFriendly: true, 
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
    petFriendly: true, 
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
    petFriendly: false,

  },

  {
    name: "Casa Lolea",      
    style: "Bar", 
    address: "Carrer de Sant Pere Més Alt 49, 08003 Barcelona", 
    price: "€€",
    phonenumber: 936241016,
    picture: "https://console.listae.com/files/2019/06/casa_lolea_barcelona_vermuteria.jpg", 
    instagram: "https://www.instagram.com/casalolea/", 
    wifi: true,
    coworking: false,
    delivery: false,
    petFriendly: false, 
  },

  {
    name: "Billy Brunch",      
    style: "Brunch", 
    address: "Carrer de Bailèn, 115, 08009 Barcelona ", 
    price: "€€",
    phonenumber: 0,
    picture: "https://www.metropoliabierta.com/uploads/s1/19/19/48/6/aperturabilly.jpeg", 
    instagram: "https://www.instagram.com/billybrunch/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: false, 
    petFriendly: true,
  },

  {
    name: "7 Portes",      
    style: "Steakhouse", 
    address: "Passeig d'Isabel II, 14, 08003 Barcelona", 
    price: "€€€",
    phonenumber: 933193033,
    picture: "https://7portes.com/content/imgsxml/galerias/panel_landinggaleria/1/t-img-9110283.jpg", 
    instagram: "https://www.instagram.com/7portes/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: false, 
    petFriendly: false,
  },

  {
    name: "Seoul",      
    style: "Korean", 
    address: "Av. de Gaudí, 70, 08025 Barcelona", 
    price: "€",
    phonenumber: 934502617,
    picture: "https://just-eat-prod-eu-res.cloudinary.com/image/upload/c_fill,f_auto,q_auto,w_1200,h_630,d_es:cuisines:coreana-7.jpg/v1/es/restaurants/42877.jpg", 
    instagram: "https://www.instagram.com/seoulrestaurantcorea/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: true, 
    petFriendly: false,
  },

  {
    name: "Goiko",      
    style: "Burgers", 
    address: "Carrer del Bruc, 25, 08010 Barcelona", 
    price: "€",
    phonenumber: 937378071,
    picture: "https://www.goiko.com/wp-content/uploads/2017/03/Kevin_Web_Desktop.jpg", 
    instagram: "https://www.instagram.com/goiko/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: true, 
    petFriendly: true,
  },

  {
    name: "Granja M.Viader",      
    style: "Coffee Shop", 
    address: "Carrer d'en Xuclà, 4, 08001 Barcelona", 
    price: "€",
    phonenumber: 933183486,
    picture: "https://inandoutbarcelona.net/wp-content/uploads/2012/02/granjaviader_portada.jpg", 
    instagram: "https://www.instagram.com/granjaviader/?hl=es", 
    wifi: true,
    coworking: true,
    delivery: false, 
    petFriendly: true,
  },

  {
    name: "LeccaBaffi",      
    style: "Italian", 
    address: "Carrer de València, 341, 08009 Barcelona", 
    price: "€",
    phonenumber: 935287693,
    picture: "https://www.gluto.it/immagini/locali/9098.jpg", 
    instagram: "https://www.instagram.com/leccabaffibcn/?hl=es", 
    wifi: true,
    coworking: true,
    delivery: false, 
    petFriendly: true,
  },

  {
    name: "Guanabara",      
    style: "Brazilian", 
    address: "Carrer del Consell de Cent, 403, 08009 Barcelona", 
    price: "€€€",
    phonenumber: 932655112,
    picture: "https://pablopeyrastudio.com/wp-content/uploads/2019/02/guanabara-restaurante-pablo-peyra-studio.jpg", 
    instagram: "https://www.instagram.com/guanabarabcn/?hl=es", 
    wifi: true,
    coworking: false,
    delivery: false, 
    petFriendly: false,
  },

  {
    name: "La Nena",      
    style: "Coffee Shop", 
    address: "Carrer de Ramón y Cajal, 36, 08012 Barcelona", 
    price: "€",
    phonenumber: 932851476,
    picture: "https://media-cdn.tripadvisor.com/media/photo-s/04/a8/b8/cd/prima-sfeer.jpg", 
    instagram: "https://www.instagram.com/granjalanena/?hl=es", 
    wifi: true,
    coworking: true,
    delivery: false, 
    petFriendly: true,
  },

  {
    name: "Caelum",      
    style: "Coffee Shop", 
    address: "Carrer de la Palla, 8, 08002 Barcelona", 
    price: "€",
    phonenumber: 933026993,
    picture: "https://blog.apartmentbarcelona.com/wp-content/uploads/2013/11/jewish2-1024x682.jpg", 
    instagram: "https://www.instagram.com/caelumbcn/?hl=es", 
    wifi: true,
    coworking: true,
    delivery: false, 
    petFriendly: true,
  },

  {
    name: "Mosquito",      
    style: "Vietnamese", 
    address: "Carrer dels Carders, 46, 08003 Barcelona", 
    price: "€€",
    phonenumber: 932687569,
    picture: "https://media-cdn.tripadvisor.com/media/photo-s/06/ae/d7/20/mosquito.jpg", 
    instagram: "https://www.instagram.com/mosquitotapas/?hl=es", 
    wifi: true,
    coworking: true,
    delivery: false, 
    petFriendly: true,
  },


]


createSeeds()
