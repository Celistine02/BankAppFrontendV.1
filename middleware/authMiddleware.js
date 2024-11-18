const jwt = require("jsonwebtoken"); // Import jsonwebtoken for token verification

/**
 * Auth Middleware
 * This middleware checks if the request has a valid JWT token.
 */
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Save the decoded user information to the request object
    req.user = decoded;
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authMiddleware; // Export the auth middleware
