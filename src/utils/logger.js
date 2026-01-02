const fs = require('fs');
const path = require('path');

const logger = (req, res, next) => {
    const logEntry = `${new Date().toISOString()} | ${req.method} | ${req.originalUrl} | IP: ${req.ip}\n`;
    console.log(logEntry.trim());
    fs.appendFileSync(path.join(__dirname, '../../requests.log'), logEntry);
    next();
};

module.exports = logger;