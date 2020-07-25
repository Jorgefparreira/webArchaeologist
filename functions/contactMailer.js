const nodemailer = require('nodemailer');
const functions = require('firebase-functions');
exports.handler = function(req, res) {
  //  res.redirect('/');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().mail.id,
      pass: functions.config().mail.appkey
    }
  });
  var mailOpts = {
    from: `${req.body.email}`,
    to: functions.config().mail.id,
    subject: 'New message from contact form at web-archaeologist.co.uk',
    text: `${req.body.name}, email: ${req.body.email}, phone number ${req.body.phone}, says: ${req.body.message}`
  };
	transporter.sendMail(mailOpts, function (error) {
		if (error) {
			console.log(error.mailOpts);
			return;
		}
		
		transport.close();
	});
}