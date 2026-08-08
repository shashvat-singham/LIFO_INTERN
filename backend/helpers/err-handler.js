function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ success: false, message: "User is not authorized" });
  }
  if (err.name === "ValidationError" || err.name === "CastError") {
    return res.status(400).json({ success: false, message: err.message });
  }
  console.error(err);
  return res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
}

module.exports = errorHandler;
