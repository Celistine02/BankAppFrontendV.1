const mongoose = require("mongoose");

// Define the bankteller schema
const banktellerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  branchName: { // Added branch name field
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the bankteller model
const BankTeller = mongoose.model("BankTeller", banktellerSchema);

// Export the bankteller model
module.exports = BankTeller;
