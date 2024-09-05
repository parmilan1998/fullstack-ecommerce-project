import { createTransport } from "nodemailer";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "../mailtrap/emailTemplate.js";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: {
      name: "Quick Cart",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Verify your email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationToken
    ),
  };

  await transporter.sendMail(mailOptions);
};

export const sendWelcomeEmail = async (email, username) => {
  const welcomeMailOptions = {
    from: {
      name: "Quick Cart",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Welcome to our Quick Cart",
    html: WELCOME_EMAIL_TEMPLATE.replace("{name}", username),
  };

  await transporter.sendMail(welcomeMailOptions);
};

export const sendResetPasswordEmail = async (email, resetUrl) => {
  const ResetMailOptions = {
    from: {
      name: "Quick Cart",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Reset Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
  };

  await transporter.sendMail(ResetMailOptions);
};

export const sendResetSuccessEmail = async (email) => {
  const ResetSuccessMailOptions = {
    from: {
      name: "Quick Cart",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{email}", email),
  };

  await transporter.sendMail(ResetSuccessMailOptions);
};

export default sendVerificationEmail;
