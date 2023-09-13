import SparkPost from "sparkpost";

const sparkpostClient = new SparkPost(process.env.SPARKPOST_API_KEY);

export default async function sendEmail(req, res) {
  const { email, fullName, subject, message } = req.body;
  console.log(subject);
  try {
    const response = await sparkpostClient.transmissions.send({
      content: {
        from: "contact@macgreene.com",
        subject: `${fullName}: ${subject}`,
        html: `<p>${message}</p><h1>${email}</h1>`,
      },
      recipients: [{ address: "macgreene14@gmail.com" }],
    });
    return res.status(200).json({ message: "Email sent successfully." });
  } catch (e) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}
