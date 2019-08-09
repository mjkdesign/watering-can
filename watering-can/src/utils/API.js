import axios from "axios";

export default {
    // Gets all books
    getPlants: function() {
      return axios.get("/api/plants");
    },
    // Gets the book with the given id
    getPlant: function(id) {
      return axios.get("/api/plants/" + id);
    },
    // Deletes the book with the given id
    deletePlant: function(id) {
      return axios.delete("/api/plants/" + id);
    },
    // Saves a book to the database
    savePlant: function(plantData) {
      return axios.post("/api/plants", plantData);
    }
  };