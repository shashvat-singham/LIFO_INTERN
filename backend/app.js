require("dotenv").config();

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const errorHandler = require("./helpers/err-handler");

const config = require("./config");

const app = express();
app.set("trust proxy", 1);

// middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan(config.env === "production" ? "combined" : "dev"));
app.use(
  "/public/uploads",
  express.static(path.join(__dirname, "public", "uploads"))
);

// basic abuse protection on auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(`${config.apiUrl}/user/login`, authLimiter);
app.use(`${config.apiUrl}/restaurant/login`, authLimiter);

// health check for load balancers / container orchestrators
app.get("/health", (req, res) => {
  const dbReady = mongoose.connection.readyState === 1;
  res.status(dbReady ? 200 : 503).json({
    status: dbReady ? "ok" : "degraded",
    uptime: process.uptime(),
  });
});

// routes
app.use(`${config.apiUrl}/dish`, require("./routers/dishes"));
app.use(`${config.apiUrl}/user`, require("./routers/users"));
app.use(`${config.apiUrl}/restaurant`, require("./routers/restaurants"));
app.use(`${config.apiUrl}/order`, require("./routers/orders"));

// 404 + centralized error handling
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});
app.use(errorHandler);

async function start() {
  try {
    await mongoose.connect(config.mongoUri, { dbName: config.dbName });
    console.log("Database connected");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }

  const server = app.listen(config.port, () => {
    console.log(`API listening on port ${config.port} at ${config.apiUrl}`);
  });

  const shutdown = async (signal) => {
    console.log(`${signal} received, shutting down gracefully`);
    server.close(async () => {
      await mongoose.connection.close();
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10000).unref();
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));

  return server;
}

if (require.main === module) {
  start();
}

module.exports = { app, start };
