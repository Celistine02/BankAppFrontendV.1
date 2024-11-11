const signupTemplate = (username, role, schoolName) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Welcome Aboard, ${username}!</h1>
            <p style="font-size: 1.2em;">You have successfully joined <strong>${schoolName}</strong> as a <strong>${role}</strong>.</p>
            <p style="font-size: 1.2em;">Your registration is currently under review. We will notify you once your role as a ${
              role === "teacher" ? "teacher" : "student"
            } is confirmed.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive , Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const schoolSignupTemplate = (schoolName) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Welcome to Sakiso Stream, ${schoolName}!</h1>
            <p style="font-size: 1.2em;">Discover our digital solutions crafted to enhance the educational experience between students and educators.</p>
            <p style="font-size: 1.2em;">Powered by Sakiso Stream.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const passwordChangeTemplate = () => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Password Updated Successfully</h1>
            <p style="font-size: 1.2em;">Your account password has been successfully updated. If this update was not initiated by you, please contact our support team immediately.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const accountDeletionTemplate = (username) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Account Deletion Confirmed</h1>
            <p style="font-size: 1.2em;">Dear ${username}, your account has been permanently deleted from our system. We are sorry to see you go and hope to serve you again in the future.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const emailVerificationTemplate = (username, verificationLink) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Verify Your Email Address</h1>
            <p style="font-size: 1.2em;">Hello ${username}, please verify your email address by clicking the link below:</p>
            <a href="${verificationLink}" style="display: inline-block; padding: 15px 30px; color: #ffffff; background-color: #007aff; text-decoration: none; border-radius: 5px; margin-top: 20px; font-size: 1.2em;">Verify Now</a>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const courseEnrollmentTemplate = (username, courseName) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Enrollment Confirmation</h1>
            <p style="font-size: 1.2em;">Congratulations ${username}! You have been enrolled in <strong>${courseName}</strong>. We wish you a successful and enriching learning journey.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const gradeNotificationTemplate = (username, subjectName, finalGrade) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Grade Report</h1>
            <p style="font-size: 1.2em;">Hello ${username}, your final grade for <strong>${subjectName}</strong> is <strong>${finalGrade}</strong>. Congratulations on your achievement!</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const accountSignInNotificationTemplate = (email, loginTime) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">New Sign-In Alert</h1>
            <p style="font-size: 1.2em;">Hello ${email}, your account was accessed on <strong>${loginTime}</strong>. If this was not you, please secure your account without delay.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">

                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream School Management System is developed and owned by Sakiso Stream Solutions</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Avenue, Newlands, Harare, Zimbabwe</p>

            </footer>
        </div>
    `;
};

const otpSignInTemplate = (username, otp) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); text-align: center;">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Your Sign-In OTP</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/5618/5618649.png" alt="Key Icon" style="width: 50px; height: 50px; margin-bottom: 20px;">
            <p style="font-size: 1.2em;">Hello ${username}, your One-Time Password for signing in is:</p>
            <p style="font-size: 2em; color: #007aff; font-weight: bold; margin: 20px 0; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">${otp}</p>
            <p style="font-size: 1.2em;">Please use this code to complete the sign-in process. Do not share this code with anyone.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const securityNotificationTemplate = (username, ipAddress, location) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); text-align: center;">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Security Alert</h1>
            <img src="https://cdn-icons-png.flaticon.com/128/16866/16866322.png" alt="Security Icon" style="width: 50px; height: 50px; margin-bottom: 20px;">
            <p style="font-size: 1.2em;">Hello ${username},</p>
            <p style="font-size: 1.2em;">We noticed a new sign-in to your account from the following IP address: <strong>${ipAddress}</strong>.</p>
            <p style="font-size: 1.2em;">Location: <strong>${location}</strong></p>
            <p style="font-size: 1.2em;">If this was not you, please secure your account immediately.</p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

const feePaymentTemplate = (
  username,
  term,
  remainingBalance,
  currency,
  methodOfPayment
) => {
  return `
        <div style="font-family: 'Arial', sans-serif; color: #202124; padding: 40px; line-height: 1.8; background-color: #ffffff; border-radius: 10px; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            <h1 style="color: #007aff; font-size: 2.5em; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);">Fee Payment Confirmation</h1>
            <p style="font-size: 1.2em;">Hello ${username}, you have successfully paid your fees for <strong>${term}</strong>. Your remaining balance is <strong>${remainingBalance} ${currency}</strong>.</p>
            <p style="font-size: 1.2em;">Payment Method: <strong>${methodOfPayment}</strong></p>
            <footer style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px;">
                <p style="color: #888; font-size: 0.9em;">Sakiso Stream is a platform for education and learning.</p>
                <p style="color: #888; font-size: 0.9em;">Head Office: 43 Victoria Drive, Harare, Zimbabwe</p>
            </footer>
        </div>
    `;
};

module.exports = {
  signupTemplate,
  schoolSignupTemplate,
  passwordChangeTemplate,
  accountDeletionTemplate,
  emailVerificationTemplate,
  courseEnrollmentTemplate,
  gradeNotificationTemplate,
  accountSignInNotificationTemplate,
  otpSignInTemplate,
  securityNotificationTemplate,
  feePaymentTemplate,
};
