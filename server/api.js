var posts = require('./controllers/products.ctrl');
var users = require('./controllers/purchases.ctrl');



var router = express.Router();

router.use('/products', posts);
router.use('/purchases', users);




module.exports = router;