var Mailgun = require('mailgun-js');
var api_key = 'pubkey-9d92cc3ada324040722a65cba293a055';
var domain = 'https://app.mailgun.com/app/domains/sandboxe75c6a59859f4ee2a880007447749c2e.mailgun.org';
var from_who = 'covalencestore123@gmail.com';

exports.sendEmail = function (to, from, subject, text) {
    var data = {
        to: $rootScope.userEmail, //double-check    
        from: from_who,
        subject: 'Covalence Online Store',
        text: 'Thank you for your recent purchase. A breakdown of your purchase can be seen here, and please let us know of any questions or concerns!'
      };
       
      mailgun.messages().send(data, function (error, body) {
        console.log(body);
        console.log(error);
      });
}

/* 
Contact us page - Should have a form where people can input their name, 
email, and a message. You should use sendgrid to email yourselves 
in response to this form being filled out.

After checkout, you should send an email to the customer thanking them for 
their purchase, complete with the list of items they purchased and the amounts
*/
