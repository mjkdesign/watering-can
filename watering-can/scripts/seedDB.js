const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Houseplants"
);

const plantSeed = [
    {
    title : "Orchid",
    light : "bright indirect light",
    water : "twice a week",
    temperature : 70.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://cdn4.1800flowers.com/wcsstore/Flowers/images/catalog/18436punx.jpg?quality=85",
    date: new Date(Date.now())
    },
    {
    title : "Peace Lily",
    light : "medium",
    water : "once a week",
    temperature : 85.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://rumahlia.com/wp-content/uploads/2019/03/Bunga-Peace-Lily-150x150.jpg",
    date: new Date(Date.now())
    },
    {
    title : "Bromeliads",
    light : "high bright light",
    water : "once a week",
    temperature : 75.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://www.pinterest.com/pin/369154500686433210/",
    date: new Date(Date.now())
    },
    {
    title : "Croton",
    light : "bright light",
    water : "consistently",
    temperature : 80.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://cdn.shopify.com/s/files/1/0047/3300/9984/products/croton_370x.jpeg?v=1544336816",
    date: new Date(Date.now()) 
    },
    {
    title : "Calathea",
    light : "bright indirect light",
    water : "regulary",
    temperature : 80.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://www.whiteflowerfarm.com/mas_assets/cache/image/5/9/f/b/23035.Jpg",
    date: new Date(Date.now())
    },
    {
    title : "Anthurium",
    light : "medium",
    water : "twice a week",
    temperature : 85.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "http://chitchatlane.com/wp-content/uploads/2018/08/l-gant-plante-verte-fleurie-euroseconde-takaplanter-anthurium-5.jpg",
    date: new Date(Date.now())
    },
    {
    title : "Cactus",
    light : "medium",
    water : "once a week",
    temperature : 80.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559607331l/46051043.jpg",
    date: new Date(Date.now())
    },
    {
    title : "Aloe",
    light : "medium",
    water : "once every two weeks",
    temperature : 85.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "http://www.medicalherbalist.ie/wp-content/uploads/2017/07/800px-Potted_Aloe_vera_plant-300x225.jpg",
    date: new Date(Date.now())
    },
    {
    title : "Spider Plant",
    light : "medium",
    water : "once per week",
    temperature : 80.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2016/06/spider-plant-400x266.jpg",
    date: new Date(Date.now())
    },
    {
    title : "Snake Plant",
    light : "medium",
    water : "every two to four weeks",
    temperature : 80.0,
    user : {
        name : "Robert Ramirez",
        status : "author"
    },
    image: "https://www.whiteflowerfarm.com/mas_assets/cache/image/5/9/7/9/22905.Jpg",
    date: new Date(Date.now())
    }
];

db.Plant
    .remove({})
    .then(() => db.Plant.collection.insertMany(plantSeed))
    .then(data => {
        console.log(data.result.n + " records inserted");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

module.exports = plantSeed;