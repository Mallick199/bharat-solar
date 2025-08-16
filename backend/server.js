require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // True for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
    tls: {
      rejectUnauthorized: false // For local testing only
    }
  });

// Contact API endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Email content
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: 'saiadityabehera@bharatsolarsolution.com',
        subject: `New Contact from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone || 'Not provided'}
          
          Message:
          ${message}
        `,
        html: `
        <!DOCTYPE html>
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Solar Inquiry</title>
    <!--[if mso]>
    <style type="text/css">
        body, table, td {font-family: Arial, sans-serif !important;}
    </style>
    <![endif]-->
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
        body {
            font-family: 'Poppins', Arial, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
        }
        .header {
            background: linear-gradient(135deg, #0a4da3, #00a651);
            padding: 30px 20px;
            text-align: center;
        }
        .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 15px;
        }
        .logo {
            height: 50px;
            margin-right: 15px;
        }
        .company-name {
            color: white;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
        }
        .hero-image {
            width: 100%;
            max-height: 250px;
            object-fit: cover;
        }
        .content {
            padding: 30px;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
        }
        .details-table td {
            padding: 12px 0;
            border-bottom: 1px solid #eee;
        }
        .details-table td:first-child {
            font-weight: 600;
            color: #555;
            width: 30%;
        }
        .message-container {
            background: #f0f8ff;
            padding: 20px;
            border-radius: 8px;
            margin: 25px 0;
        }
        .cta-button {
            background-color: #ff9800;
            color: white !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 4px;
            font-weight: 600;
            display: inline-block;
            margin: 15px 0;
        }
        .footer {
            background-color: #0a4da3;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 12px;
        }
        .highlight {
            color: #0a4da3;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header with Logo -->
        <div class="header">
            <div class="logo-container">
                <img src="https://bharatsolarsolution.com/assets/solar-energy_8820867-8fa56a29.png" alt="Bharat Solar Solution Logo" class="logo">
                <p class="company-name">Bharat Solar Solution</p>
            </div>
            <h1 style="color: white; margin: 0; font-size: 22px;">New Customer Inquiry</h1>
        </div>

        <!-- Hero Image -->
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=250&q=80" alt="Solar Panels" class="hero-image">

        <!-- Content -->
        <div class="content">
            <h2 style="color: #0a4da3; margin-top: 0;">Customer Details</h2>
            
            <table class="details-table">
                <tr>
                    <td>Name:</td>
                    <td class="highlight">${name}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td><a href="mailto:${email}" style="color: #0a4da3; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>${phone || 'Not provided'}</td>
                </tr>
                <tr>
                    <td>Date:</td>
                    <td>${new Date().toLocaleDateString()}</td>
                </tr>
            </table>

            <div class="message-container">
                <h3 style="margin-top: 0; color: #0a4da3;">Customer Message:</h3>
                <p>${message}</p>
            </div>

            <p style="margin-bottom: 25px;">This potential customer is interested in our solar solutions. Please respond promptly to convert this lead.</p>

            <a href="mailto:${email}" class="cta-button">Respond to Customer</a>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>Bharat Solar Solution - Harnessing the Power of the Sun</p>
            <p>© ${new Date().getFullYear()} Bharat Solar Solution. All rights reserved.</p>
            <p style="margin-top: 15px;">
                <a href="https://bharatsolarsolution.com" style="color: #ff9800; text-decoration: none;">Visit Our Website</a> | 
                <a href="tel:+911234567890" style="color: #ff9800; text-decoration: none;">Call Us</a>
            </p>
        </div>
    </div>
</body>
</html>
        `
      };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});