const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;
const mailgun = require("mailgun-js")({
  apiKey: API_KEY,
  domain: DOMAIN,
  host: "api.mailgun.net",
});

async function sendEmail(req, res) {
  console.log(API_KEY);
  try {
    const { subject, message } = req.body;
    await mailgun.messages().send({
      to: "macgreene14@gmail.com",
      from: "macgreene14@gmail.com",
      subject: `Contact: ${subject}`,
      text: `Message: ${message}`,
    });
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
