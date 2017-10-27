var Mailgun = require('mailgun-js');
var domain = 'https://app.mailgun.com/app/domains/sandboxe75c6a59859f4ee2a880007447749c2e.mailgun.org';
var from_who = 'covalencestore123@gmail.com';

exports.sendEmail = function (toAddress, fromAddress, mailSubject, mailBody) {
    var data = {
        to: toAddress,     
        from: fromAddress,
        subject: mailSubject,
        html: mailBody
        // text: 'Thank you for your recent purchase. A breakdown of your purchase can be seen here, and please let us know of any questions or concerns!'
      };
       
      return mailgun.messages().send(data);
}
