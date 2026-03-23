// server.js
const express = require('express');
const cors = require('cors');
const emailjs = require('@emailjs/nodejs'); // Works in Node.js

emailjs.init("fnr5Np_7rM7tjBmgX");

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-query', async (req, res) => {
  const { name, email, phone, requirement } = req.body;

  try {
    await emailjs.send('service_wp2id3c', 'template_customer', {
      to_name: name,
      reply_to: email,
      message: `Thank you for reaching out to Shyam Ji Textile. We have received your query:\n\n${requirement}`
    }, 'fnr5Np_7rM7tjBmgX');

    await emailjs.send('service_wp2id3c', 'template_admin', {
      from_name: name,
      reply_to: email,
      phone,
      message: requirement,
    }, 'fnr5Np_7rM7tjBmgX');

    res.status(200).send({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to send emails' });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
