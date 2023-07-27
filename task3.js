var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:
    {
        user:'ratnamani.tholeti27@gmail.com',
        pass:'lzzjxjtgcajkfobl',

    }
})
var mailOptions={
    from: 'ratnamani.tholeti27@gmail.com',
    to: 'pravin.consensus@gmail.com',
    subject: '20A21A05H0',
    text: 'Task 3 Sending mail'
};
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email Sent : '+ info.response);
    }
})