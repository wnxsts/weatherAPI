const weatherService = require('../service/weatherService');
let favorites = ["Astana", "Almaty"]; 

exports.getAllFavorites = async (req, res) => {
    try {
        const data = await Promise.all(favorites.map(city => weatherService.fetchWeather(city)));
        res.json(data);
    } catch (err) { res.status(500).json({ error: err.message }); }
};

exports.getCityWeather = async (req, res) => {
    try {
        const data = await weatherService.fetchWeather(req.params.city);
        res.json(data);
    } catch (err) { res.status(404).json({ error: "City not found" }); }
};

exports.addFavorite = async (req, res) => {
    const { city } = req.body;
    if (city && !favorites.includes(city)) {
        favorites.push(city);
        const data = await weatherService.fetchWeather(city);
        return res.status(201).json(data);
    }
    res.status(400).json({ message: "Already exists or invalid" });
};

exports.updatePosition = (req, res) => {
    const { city } = req.params;
    const { newIndex } = req.body;
    const idx = favorites.indexOf(city);
    if (idx > -1) {
        favorites.splice(idx, 1);
        favorites.splice(newIndex, 0, city);
        return res.json(favorites);
    }
    res.status(404).json({ message: "Not found" });
};

exports.deleteFavorite = (req, res) => {
    favorites = favorites.filter(c => c !== req.params.city);
    res.json({ message: "Deleted", favorites });
};