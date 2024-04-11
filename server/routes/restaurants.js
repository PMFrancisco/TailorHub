const express = require('express');
const router = express.Router();
const restaurants = require('../database/restaurants');


router.get('', (req, res) => {
    res.json(restaurants);
});

router.get('/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send('Restaurant not found.');
    res.json(restaurant);
});

router.post('/', (req, res) => {
    const restaurant = {
        id: restaurants.length + 1,
        name: req.body.name,
        location: req.body.location
    };
    restaurants.push(restaurant);
    res.send(restaurant);
});

router.put('/:id', (req, res) => {
    const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
    if (!restaurant) return res.status(404).send('Restaurant not found.');

    restaurant.name = req.body.name || restaurant.name;
    restaurant.location = req.body.location || restaurant.location;
    res.send(restaurant);
});

router.delete('/:id', (req, res) => {
    const index = restaurants.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Restaurant not found.');

    restaurants.splice(index, 1);
    res.send({ message: "Restaurant deleted" });
});

module.exports = router