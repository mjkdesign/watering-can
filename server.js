const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const dbConnection = require('./server/database');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const passport = require('./server/passport');

const PORT = process.env.PORT || 3001;

// ROUTE REQUIRES
const user = require('./routes/user');

// MIDDLEWARE
app.use(logger('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// SESSIONS

app.use(
	session({
		secret: 'plant-pants', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)


// PASSPORT
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// ROUTES
app.use('/user', user)


// const db = require("./models");
// const plantSeed = require("./scripts/seedDB");

// mongoose 
//     .connect(process.env.MONGODB_URI || "mongodb://localhost/Houseplants")

//     db.Plant.create(plantSeed)
//   .then(function(dbPlant) {
//     console.log(dbPlant);
//   })
//   .catch(function(err) {
//     console.log(err.message);
// });


// START SERVER
app.listen(PORT, () => {
    console.log(`Server starting on http://localhost/${PORT}`)
});

