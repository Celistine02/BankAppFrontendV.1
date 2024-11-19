// Import required modules
const BankTeller = require("./../../../models/management/bankTeller");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../../../middleware/sendEmail");
const { signupTemplate } = require("./../../../../utils/emailTemplate");

/**
 * Controller to handle bank teller signup.
 * @param {Object} req - The request object containing bank teller details.
 * @param {Object} res - The response object used to send back the HTTP response.
 */
const bankTellerSignupController = async (req, res) => {
  try {
    // Extract details from request body
    const { username, email, password } = req.body;

    // Check if any field is blank
    if (!username || !email || !password) {
      return res.status(400).send({ message: "All fields are required." });
    }

    // Check if the bank teller already exists
    const existingTeller = await BankTeller.findOne({ email });
    if (existingTeller) {
      return res.status(409).send({ message: "Bank teller already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new bank teller
    const newBankTeller = new BankTeller({
      username,
      email,
      password: hashedPassword,
    });

    // Save the bank teller to the database
    await newBankTeller.save();

    // Generate a token for the bank teller
    const token = jwt.sign(
      { bankTellerId: newBankTeller._id, role: "bankTeller" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send signup confirmation email to the bank teller
    const emailContent = signupTemplate(username, "bank teller", "N/A");
    await sendEmail(
      email,
      "Welcome to Celestine Banking Services",
      emailContent
    );

    // Prepare bank teller profile data to be sent to the frontend
    const bankTellerProfileData = {
      id: newBankTeller._id,
      username: newBankTeller.username,
      email: newBankTeller.email,
      branchName: newBankTeller.branchName,
    };  

    // Send success response with token and bank teller profile data
    res.status(201).send({
      message: "Bank teller signed up successfully",
      token,
      bankTellerProfileData,
    });
  } catch (error) {
    // Handle errors and send error response with a detailed error message
    res.status(500).send({
      message: "Error signing up bank teller. Please try again later.",
      error: error.message,
    });
  }
};

// Export the bank teller signup controller
module.exports = { bankTellerSignupController };
