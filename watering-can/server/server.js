const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require("path");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(cors());


mongoose 
    .connect(process.env.MONGODB_URI || "mongodb://localhost/")

        app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
        });
    

    const port = process.env.PORT || 3001;

    app.listen(port, () => console.log(`Server starting on port ${port}`));

