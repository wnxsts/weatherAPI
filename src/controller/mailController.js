const { subscribers } = require('../service/mailService');

exports.subscribeUser = (req, res) => {
    const { email, city } = req.body;
    if (email && city) {
        subscribers.push({ email, city }); // Сохраняем юзера 
        return res.status(200).json({ message: "Subscribed!" });
    }
    res.status(400).json({ error: "Missing data" });
};