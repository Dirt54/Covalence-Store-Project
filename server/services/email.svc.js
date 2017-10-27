var mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.DOMAIN_KEY });

var from_who = 'covalencestore123@gmail.com';

exports.sendEmail = function (toAddress) {
    var data = {
        to: toAddress,     
        from: from_who,
        subject: 'Covalence store purchase',
        html: 'Thank you for your recent purchase. A breakdown of your purchase can be seen here, and please let us know of any questions or concerns!'
      };
       
      return mailgun.messages().send(data);
}
