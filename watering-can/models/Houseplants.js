const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PlantSchema = new Schema({

    title: { type: String, required: true },

    light: { type: String, required: true },

    water: { type: String, required: true },

    temperature: Number,

    user: {
        name: String,
        status: String
    },
    date: { type: Date, default: Date.now }
});

const Plant = mongoose.model("Houseplants", PlantSchema);

module.exports = Plant;