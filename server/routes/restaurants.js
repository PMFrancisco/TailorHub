const express = require("express");
const router = express.Router();
const restaurants = require("../database/restaurants.json");
const axios = require("axios");
const upload = require("../config/multer");

const fs = require('fs');
const path = require('path');
const restaurantsDataPath = path.join(__dirname, '../database/restaurants.json');


router.get("", (req, res) => {
  res.json(restaurants);
});

router.get("/:id", (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send("Restaurant not found.");
  res.json(restaurant);
});

router.post("/", upload.single("image"), async (req, res) => {
    try {
      const response = await axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: req.body.address,
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      });
  
      const latlng = response.data.results[0].geometry.location;
  
      const restaurant = {
        id: restaurants.length + 1,
        name: req.body.name,
        description: req.body.description,
        address: req.body.address,
        image: req.file ? req.file.path : null,
        latlng: latlng,
      };
      restaurants.push(restaurant);
  
      fs.writeFileSync(restaurantsDataPath, JSON.stringify(restaurants, null, 2), 'utf8');
      res.send(restaurant);
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).send("Error processing request");
    }
  });
  

router.put("/:id", (req, res) => {
  const restaurant = restaurants.find((r) => r.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).send("Restaurant not found.");

  restaurant.name = req.body.name || restaurant.name;
  restaurant.location = req.body.location || restaurant.location;
  res.send(restaurant);
});

router.delete("/:id", (req, res) => {
  const index = restaurants.findIndex((r) => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Restaurant not found.");

  restaurants.splice(index, 1);
  res.send({ message: "Restaurant deleted" });
});

module.exports = router;
