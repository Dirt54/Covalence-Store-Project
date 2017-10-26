var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.charge = function(token, amt){
    return stripe.charges.create({
        source: token,
        amount: amt * 100,
        currency: 'usd',
        description: 'Covalence Online Store'
    });
}

/*TEST CARD NUMBERS
4242 4242 4242 4242 causes successfull transaction
4000 0000 0000 0002 causes a decline*/