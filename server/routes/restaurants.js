const express = require("express");
const router = express.Router();
const restaurants = require("../database/restaurants.json");
const axios = require("axios");
const upload = require("../config/multer");

const fs = require("fs");
const path = require("path");
const restaurantsDataPath = path.join(
  __dirname,
  "../database/restaurants.json"
);

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
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address: req.body.address,
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
      }
    );

    const latlng = response.data.results[0].geometry.location;
    const now = new Date();
    const newRestaurantId = now
      .toISOString()
      .replace(/[^0-9]/g, "")
      .slice(0, -3);

    const restaurant = {
      id: newRestaurantId,
      name: req.body.name,
      description: req.body.description,
      address: req.body.address,
      image: req.file ? req.file.path : null,
      latlng: latlng,
    };
    restaurants.push(restaurant);

    fs.writeFileSync(
      restaurantsDataPath,
      JSON.stringify(restaurants, null, 2),
      "utf8"
    );
    res.send(restaurant);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Error processing request");
  }
});

router.post("/:id/reviews", (req, res) => {
  const { id } = req.params;
  const { name, rating, comments } = req.body;
  const restaurant = restaurants.find((r) => r.id === parseInt(id));

  if (!restaurant) {
    return res.status(404).send("Restaurant not found.");
  }

  const now = new Date();
  const newReviewId = now
    .toISOString()
    .replace(/[^0-9]/g, "")
    .slice(0, -3);

  const newReview = {
    id: newReviewId,
    name,
    date: new Date().toISOString(),
    rating,
    comments,
  };

  restaurant.reviews.push(newReview);

  fs.writeFileSync(
    restaurantsDataPath,
    JSON.stringify(restaurants, null, 2),
    "utf8"
  );
  res.json(newReview);
});

router.delete("/:restaurantId/reviews/:reviewId", (req, res) => {
  const { restaurantId, reviewId } = req.params;
  const restaurant = restaurants.find((r) => r.id === parseInt(restaurantId));
  if (!restaurant) return res.status(404).send("Restaurant not found.");

  const reviewIndex = restaurant.reviews.findIndex(
    (review) => review.id === reviewId
  );
  if (reviewIndex === -1) return res.status(404).send("Review not found.");

  restaurant.reviews.splice(reviewIndex, 1);
  fs.writeFileSync(
    restaurantsDataPath,
    JSON.stringify(restaurants, null, 2),
    "utf8"
  );
  res.send({ message: "Review deleted" });
});

router.put("/:restaurantId/reviews/:reviewId", (req, res) => {
  const { restaurantId, reviewId } = req.params;
  const { name, rating, comments } = req.body;
  const restaurant = restaurants.find((r) => r.id === parseInt(restaurantId));
  if (!restaurant) return res.status(404).send("Restaurant not found.");

  const review = restaurant.reviews.find(
    (review) => review.id === reviewId
  );
  if (!review) return res.status(404).send("Review not found.");

  review.name = name || review.name;
  review.rating = rating || review.rating;
  review.comments = comments || review.comments;

  fs.writeFileSync(
    restaurantsDataPath,
    JSON.stringify(restaurants, null, 2),
    "utf8"
  );
  res.json(review);
});

module.exports = router;
