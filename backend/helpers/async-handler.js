// Forwards rejected promises from async route handlers to the
// centralized error handler instead of crashing the process.
module.exports = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
