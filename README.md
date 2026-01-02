Weather API Application

Name: Samatova Zhanel
Course: Web Technologies 2 (Backend)
Assignment: Creating a Weather API App using Node.js
1. Introduction
This project is a functional Weather API application developed using Node.js and Express. The application fetches real-time weather data from the OpenWeatherMap API, processes it on the server-side, and provides a set of RESTful endpoints for client interaction.


Key focus areas:
Real-time data processing.
Automated SMTP notifications with scheduling.
Middleware-based logging for monitoring.
Clean backend architecture with clear separation of concerns.
2. Technologies Used
Node.js – JavaScript runtime environment.
Express.js – Backend framework for routing and middleware.
Axios – For making asynchronous requests to the OpenWeatherMap API.
Nodemailer – To handle SMTP email notifications.
Node-cron – To schedule automated tasks (email updates).
Dotenv – To manage environment variables (API keys, email credentials).
JSON files – Server-side storage for favorite cities and user data.
3. Project Structure
The project follows a modular structure to ensure maintainability:

Plaintext
weather-api/
├── data/               # JSON files for data storage
├── logs/               # Log files (requests.log)
├── public/             # Frontend files (index.html, style.css)
├── src/
│   ├── controller/     # Logic for handling requests
│   ├── router/         # API Route definitions
│   ├── service/        # External API and Email logic (Cron jobs)
│   ├── utils/          # Middleware and logging utilities
├── .env                # Secret keys and configurations
├── server.js           # Entry point (Port 3000)
└── package.json        # Project dependencies
4. Features & Requirements
Weather Information & Mapping (Requirement 1)
Retrieves: Temp, "feels like", humidity, pressure, wind speed, and rain volume (last 3h).
Mapping: The client uses coordinates (Lat/Lon) provided by the server to visually showcase city locations via embedded Google Maps.
RESTful API (Requirement 2)
Implement 5 endpoints for managing favorite cities:
GET /api/weather — Get weather for all favorite cities.
GET /api/weather/:city — Get weather for a specific city.
POST /api/weather — Add a city to favorites.
PUT /api/weather/:city — Reorder or update city data.
DELETE /api/weather/:city — Remove a city from favorites.
Middleware Logging (Requirement 3)
A custom middleware captures: HTTP Method, URL, Timestamp, and Client IP. Logs are displayed in the console and saved to logs/requests.log.

SMTP Email Notifications (Requirement 4)
Using node-cron, the system sends updates at:
09:00, 13:00, 20:00: Current weather updates.
22:00: Forecast for the next day with Personalized Recommendations (e.g., "Take an umbrella" if rain is forecasted).
5. Setup Instructions
Clone the project and navigate to the folder.
Install dependencies:
Bash
npm install
Configure environment variables: Create a .env file with your OPENWEATHER_API_KEY, EMAIL_USER, and EMAIL_PASS.
Start the server:
Bash
node server.js
The server will run on http://localhost:3000.
6. Conclusion
This application demonstrates a complete backend solution, integrating third-party APIs with a custom RESTful service and automated client communication tools. It adheres to all the requirements specified in the assignment.
