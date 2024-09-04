// import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
// import { mailtrapClient, sender } from "./mailtrap.config.js";
// import dotenv from "dotenv";

// dotenv.config();

// export const sendVerificationEmail = async (email, verificationToken) => {
//   const recipient = [{ email }];
//   try {
//     const res = await mailtrapClient.send({
//       from: sender,
//       to: recipient,
//       subject: "Verify your email",
//       html: VERIFICATION_EMAIL_TEMPLATE.replace(
//         "{verificationCode}",
//         verificationToken
//       ),
//       category: "Verification Emails",
//     });
//     console.log(res);
//   } catch (error) {
//     console.error("Error sending verification email:", error);
//     throw new Error(`Failed to send verification email: ${error.message}`);
//   }
// };
