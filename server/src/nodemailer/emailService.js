import { createTransport } from "nodemailer";
import { VERIFICATION_EMAIL_TEMPLATE } from "../mailtrap/emailTemplate.js";
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

export default sendVerificationEmail;
