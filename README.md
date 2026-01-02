# Weather API Application

### Student Information
* **Name:** Samatova Zhanel
* **Course:** Web Technologies 2 (Backend)
* **Assignment:** Creating a Weather API App using Node.js

---

## 1. Introduction
This project is a functional Weather API application developed using **Node.js** and **Express**. The application fetches real-time weather data from the **OpenWeatherMap API**, processes it on the server-side, and provides a set of RESTful endpoints for client interaction.

**Key focus areas:**
* Real-time data processing and external API integration.
* Automated SMTP notifications with precision scheduling.
* Custom middleware-based logging for system monitoring.
* Clean backend architecture following the separation of concerns principle.

---

## 2. Technologies Used
* **Node.js** – JavaScript runtime environment.
* **Express.js** – Backend framework for routing and middleware.
* **Axios** – Promise-based HTTP client for API requests.
* **Nodemailer** – Module for sending emails via SMTP.
* **Node-cron** – Task scheduler for automated weather updates.
* **Dotenv** – Environment variable management for security.
* **JSON files** – Server-side persistent data storage (NoSQL style).

---

## 3. Project Structure
The project follows a modular structure to ensure maintainability and scalability:



```text
weather-api/
├── data/               # JSON files for data storage (favorites/users)
├── logs/               # Log directory (contains requests.log)
├── public/             # Frontend static files (index.html, style.css)
├── src/
│   ├── controller/     # Business logic for route handlers
│   ├── router/         # RESTful API route definitions
│   ├── service/        # External API calls and Cron job logic
│   ├── utils/          # Middleware and logging helper functions
├── .env                # Secret keys (API keys, email credentials)
├── server.js           # Main entry point (starts on Port 3000)
└── package.json        # Manifest file with dependencies
---
```
## 4. Features

### Weather Information

The application retrieves and processes the following weather data:
- Temperature
- Feels-like temperature
- Humidity
- Pressure
- Wind speed
- Rain volume for the last 3 hours
- Geographic coordinates (latitude and longitude)

City coordinates are used on the client side to display locations using Google Maps.

---

### RESTful API Endpoints

- GET /api/weather  
  Returns weather data for all favorite cities.

- GET /api/weather/:city  
  Returns weather data for a specific city.

- POST /api/weather  
  Adds a new city to the favorites list and retrieves its weather data.

- PUT /api/weather/:city  
  Updates or reorders city data in the favorites list.

- DELETE /api/weather/:city  
  Removes a city from the favorites list.

All data is stored using server-side JSON files without a database.

---

## 5. Middleware Logging

A custom Express middleware logs all incoming HTTP requests.  
The following information is captured:
- HTTP method
- Request URL
- Timestamp
- Client IP address

Logs are displayed in the console and written to the file:

---

## 6. Email Notifications

The application uses SMTP and scheduled tasks to send automated weather updates.

Emails are sent at the following times:
- 09:00 – Morning weather update
- 13:00 – Afternoon weather update
- 20:00 – Evening weather update
- 22:00 – Weather forecast for the next day

Each email includes personalized recommendations such as:
- Dressing warmly in cold weather
- Wearing light clothing in warm weather
- Taking an umbrella if rain is expected

---

## 7. Setup Instructions

1. Install project dependencies:
   ```bash
   npm install
8. Conclusion

This project demonstrates a complete backend Weather API solution built with Node.js and Express.
It integrates a third-party weather API, implements RESTful services, uses middleware for logging, and supports automated email notifications.
The application fully satisfies all requirements of the assignment.
