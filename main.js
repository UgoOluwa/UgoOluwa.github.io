function SendMail() {
    var a = document.getElementById('name').value;
    var b = document.getElementById('email').value;
    var c = document.getElementById('message').value;

    if (!a || !b || !c) {
        alert("Please fill the form correctly!!");
        return
    }
    alert("Testing...")
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'zornaquad@gmail.com',
            pass: 'father+1'
        }
    });

    var mailOptions = {
        from: 'zornaquad@gmail.com',
        to: 'ugoluwa@gmail.com',
        subject: 'Enquiry',
        text: "Hello!"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}