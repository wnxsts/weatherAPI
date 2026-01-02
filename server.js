const express = require('express');
const path = require('path');
require('dotenv').config();
const logger = require('./src/utils/logger');
const weatherRoutes = require('./src/router/weatherRoutes');
const mailRoutes = require('./src/router/mailRoutes');
require('./src/service/mailService');

const app = express();
app.use(express.json());
app.use(express.static('public')); 
app.use(logger);

app.use('/api/weather', weatherRoutes);
app.use('/api/mail', mailRoutes); // Подключаем почту

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}`);
});