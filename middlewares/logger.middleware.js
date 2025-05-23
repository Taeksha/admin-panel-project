// Middleware to log API endpoint, method and timestamp
const logger = (req, res, next) => {
  const timestamp = new Date().toString();
  console.log(`URL: ${req.url}, Method: ${req.method}, Timestamp: ${timestamp}`);
  next();
};

module.exports = { logger };
