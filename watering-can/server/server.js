const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const proxy = require("http-proxy-middleware");

app.use(cors());

app.use(logger("dev"));

app.use('/api/plants', proxy({ target: "http://localhost:3001/", changeOrigin: true }));

const db = require("../models");

const plantSeed = require("../scripts/seedDB");

mongoose 
    .connect(process.env.MONGODB_URI || "mongodb://localhost/Houseplants")

    db.Plant.create(plantSeed)
  .then(function(dbPlant) {
    console.log(dbPlant);
  })
  .catch(function(err) {
    console.log(err.message);
  });


    

    const port = process.env.PORT || 3001;

    app.listen(port, () => console.log(`Server starting on port ${port}`));

