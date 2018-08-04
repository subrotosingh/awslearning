var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'subroto2040@gmail.com',
        pass: 'decPintu@1087'
    }
});

var mailOptions = {
    from: 'subroto2040@gmail.com',
    to: 'sweta.ghosh360@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});



