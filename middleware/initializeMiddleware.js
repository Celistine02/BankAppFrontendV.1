// Allow Cross-Origin Requests (CORS)
const cors = require("cors");

// Load environment variables
const { config } = require("dotenv");

// Parse cookies
const cookieParser = require("cookie-parser");

// Express framework
const express = require("express");

function initializeMiddleware(app) {
  // CORS
  app.use(
    cors({
      origin: (origin, callback) => {
        const allowedOrigins = ["*"];
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Added OPTIONS method
      preflightContinue: false,
      optionsSuccessStatus: 204, // Handle legacy browser support
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"], // Added allowed headers
    })
  );

  // Environment variables
  config();

  // Parse cookies
  app.use(cookieParser());

  // Parse JSON bodies
  app.use(express.json());

  // API Key Check Middleware
  app.use((req, res, next) => {
    if (!process.env.PORTAl_API_KEY) {
      console.error("Security is not set. Exiting application.");
      process.exit(1);
    }
    next();
  });

  // Handle CORS preflight requests
  app.options("*", cors()); // Enable preflight for all routes
}

module.exports = initializeMiddleware;
