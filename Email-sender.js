var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ahmedghorbel54@gmail.com',
    pass: 'Ahmed9819-'
  }
});

var mailOptions = {
  from: 'ahmedghorbelc@gmail.com',
  to: 'achrefouerfelli78@gmail.comnode',
  subject: 'Sending Email using Node.js',
  text: 'Chkawlek fi Fallujah!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});