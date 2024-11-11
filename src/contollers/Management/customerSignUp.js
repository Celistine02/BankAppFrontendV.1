// Import required modules
const Customer = require("./../../../models/management/customer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("./../../../middleware/sendEmail");
const { signupTemplate } = require("./../../../../utils/emailTemplate");

/**
 * Controller to handle customer signup.
 * @param {Object} req - The request object containing customer details.
 * @param {Object} res - The response object used to send back the HTTP response.
 */
const customerSignupController = async (req, res) => {
  try {
    // Extract details from request body
    const { username, email, password } = req.body;

    // Check if any field is blank
    if (!username || !email || !password) {
      return res.status(400).send({ message: "All fields are required." });
    }

    // Check if the customer already exists
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(409).send({ message: "Customer already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new customer
    const newCustomer = new Customer({
      username,
      email,
      password: hashedPassword,
    });

    // Save the customer to the database
    await newCustomer.save();

    // Generate a token for the customer
    const token = jwt.sign(
      { customerId: newCustomer._id, role: "customer" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Send signup confirmation email to the customer
    const emailContent = signupTemplate(username, "customer", "N/A");
    await sendEmail(email, "Welcome to Cloud Campus", emailContent);

    // Prepare customer profile data to be sent to the frontend
    const customerProfileData = {
      id: newCustomer._id,
      username: newCustomer.username,
      email: newCustomer.email,
    };

    // Send success response with token and customer profile data
    res.status(201).send({
      message: "Customer signed up successfully",
      token,
      customerProfileData,
    });
  } catch (error) {
    // Handle errors and send error response with a detailed error message
    res.status(500).send({
      message: "Error signing up customer. Please try again later.",
      error: error.message,
    });
  }
};

// Export the customer signup controller
module.exports = { customerSignupController };
