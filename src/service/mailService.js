const nodemailer = require('nodemailer');
const cron = require('node-cron');
const weatherService = require('./weatherService');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

const subscribers = [{ email: "test@example.com", city: "Almaty" }];

const sendUpdate = async (timeLabel, isForecast = false) => {
    for (const sub of subscribers) {
        const data = isForecast ? await weatherService.fetchForecast(sub.city) : await weatherService.fetchWeather(sub.city);
        let reco = "Have a great day!";
        
        const temp = isForecast ? data.main.temp : data.temp;
        const desc = isForecast ? data.weather[0].description : data.description;

        if (desc.includes('rain')) reco = "Remind: take an umbrella! ☔";
        else if (temp < 10) reco = "Suggest: dress warmly! 🧥";
        else if (temp > 25) reco = "Suggest: wear light clothing! 👕";

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: sub.email,
            subject: `Weather Update - ${timeLabel}`,
            text: `Current weather in ${sub.city}: ${temp}°C, ${desc}. Recommendation: ${reco}`
        };
        transporter.sendMail(mailOptions);
    }
};

// Расписание (09:00, 13:00, 20:00, 22:00) 
cron.schedule('0 9 * * *', () => sendUpdate("Morning"));
cron.schedule('0 13 * * *', () => sendUpdate("Afternoon"));
cron.schedule('0 20 * * *', () => sendUpdate("Evening"));
cron.schedule('0 22 * * *', () => sendUpdate("Tomorrow Forecast", true));