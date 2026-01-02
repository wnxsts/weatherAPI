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
