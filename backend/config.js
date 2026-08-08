const required = (name, fallback) => {
  const value = process.env[name] ?? fallback;
  if (value === undefined || value === "") {
    console.error(`Missing required environment variable: ${name}`);
    process.exit(1);
  }
  return value;
};

module.exports = {
  env: process.env.NODE_ENV || "development",
  port: parseInt(process.env.PORT, 10) || 5000,
  apiUrl: process.env.API_URL || "/api/v1",
  mongoUri: required("MONGODB_CONNECT"),
  dbName: process.env.DB_NAME || "lifo",
  // kept the legacy lowercase `secret` variable as a fallback
  jwtSecret: required("JWT_SECRET", process.env.secret),
  corsOrigin: process.env.CORS_ORIGIN || "*",
};
