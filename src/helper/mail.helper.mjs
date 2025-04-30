import nodemailer from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Port 587 is for STARTTLS
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_SECRET,
  },
  logger: false,
  debug: true,
});

const sendMail = async (
  to,
  subject,
  htmlContent
  // ...params
) => {
  try {
    // let data = htmlContent(...params);
    const info = await transporter.sendMail({
      from: `"European Office Supplies Ltd (EOS)" <${process.env.NODEMAILER_USER}>`,
      to,
      subject,
      html: htmlContent,
    });

    // console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};

export { sendMail };
