console.log("email start");
const nodemailer = require('nodemailer');


notify = () => {
    let transportOptions = nodemailer.createTransport({
        service: 'Gmail',
        //port: 587,
        //secure: false, // true for 465, false for other ports
        auth: {
            user: 'swapcardapps@gmail.com', // generated ethereal user
            pass: 'sedlab06'  // generated ethereal password
        },
        tls: {
            rejectUnauthorized:false
        }
    });
    
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Swapcard" <swapcardapps@gmail.com>', // sender address
        //from: "test.nodemailer@gmail.com",
        to: "leduypc1988@gmail.com", // list of receivers
        subject: "New trade request", // Subject line
        text: "Please login in your acoount to see more", // plain text body
        html: "<a>www.google.com</a>" // html body
    };
    
    // send mail with defined transport object
    transportOptions.sendMail(mailOptions, (error, info) => { 
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        //console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}

module.exports = notify;