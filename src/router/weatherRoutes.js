const express = require('express');
const router = express.Router();
const weatherController = require('../controller/weatherController');

router.get('/', weatherController.getAllFavorites);
router.get('/:city', weatherController.getCityWeather);
router.post('/', weatherController.addFavorite);
router.put('/:city', weatherController.updatePosition);
router.delete('/:city', weatherController.deleteFavorite);

module.exports = router;