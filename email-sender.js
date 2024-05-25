const nodemailer = require('nodemailer');

// Configure the transporter
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
}
});

// Email options
let mailOptions = {
from: 'your-email@gmail.com',
to: 'your-email@gmail.com',
subject: 'Test Email from Node.js',
text: 'Hello, this is a test email from your Node.js application!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    return console.log(error);
}
console.log('Email sent: ' + info.response);
});
