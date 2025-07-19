# Hướng dẫn setup Email Backend

## 1. Cài đặt Backend dependencies

```bash
cd /home/tungduong/web-app/
mkdir email-service
cd email-service
npm init -y
npm install express nodemailer cors dotenv
```

## 2. Tạo file server.js

```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Configure email transporter
const transporter = nodemailer.createTransporter({
  service: 'gmail', // hoặc 'outlook', 'yahoo'
  auth: {
    user: process.env.EMAIL_USER, // your-email@gmail.com
    pass: process.env.EMAIL_PASS  // your-app-password
  }
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, html } = req.body;
    
    const mailOptions = {
      from: {
        name: 'UTEERS - Đại học Ngoại ngữ',
        address: process.env.EMAIL_USER
      },
      to: to,
      subject: subject,
      html: html
    };
    
    const result = await transporter.sendMail(mailOptions);
    
    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: result.messageId
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});
```

## 3. Tạo file .env

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=3001
```

## 4. Cấu hình Gmail App Password

1. Đăng nhập Gmail
2. Vào Google Account Settings
3. Security > 2-Step Verification
4. App passwords > Generate new password
5. Copy password vào .env file

## 5. Chạy service

```bash
node server.js
```

## 6. Update Frontend để gọi API thực

Trong ProjectDetail.vue, uncomment các dòng:

```javascript
const response = await fetch('http://localhost:3001/api/send-email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(emailData)
})

if (response.ok) {
  console.log('Email sent successfully')
} else {
  console.error('Failed to send email')
}
```

## 7. Alternative: Sử dụng EmailJS (không cần backend)

```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("your-public-key");

// Send email
emailjs.send(
  "your-service-id",
  "your-template-id",
  {
    to_email: "user@example.com",
    project_title: this.project.title,
    project_date: this.project.date,
    // ... other template variables
  }
).then(() => {
  console.log('Email sent successfully');
}).catch((error) => {
  console.error('Error:', error);
});
```

## 8. Production Setup

- Sử dụng SendGrid, Mailgun, hoặc AWS SES
- Setup proper domain authentication
- Add rate limiting
- Implement email templates database
- Add email queue system (Redis + Bull)

## 9. Security Best Practices

- Validate email addresses
- Implement rate limiting
- Use environment variables
- Add CSRF protection
- Sanitize HTML content
- Log email activities
