// Example backend implementation for sending emails via SMTP
// This would be implemented in your backend server (Node.js/Express)

/*
To implement this in your backend:

1. Install dependencies:
   npm install express nodemailer cors

2. Set up environment variables in .env:
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=demo-requests@medai.com

3. Create this API endpoint in your backend:
*/

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure nodemailer transporter
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// API endpoint to send demo request emails
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: html
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('Email sent:', info.messageId);
    res.status(200).json({ 
      success: true, 
      messageId: info.messageId 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
});

app.listen(3001, () => {
  console.log('Email service running on port 3001');
});

/*
Then update your frontend emailService.ts to use this endpoint:

export const sendDemoRequestEmail = async (formData: DemoRequestData): Promise<boolean> => {
  try {
    const emailData = {
      to: "demo-requests@medai.com",
      subject: `New Demo Request from ${formData.name}`,
      html: generateEmailTemplate(formData)
    };

    const response = await fetch('http://localhost:3001/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    });

    const result = await response.json();
    return result.success;
    
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};
*/
