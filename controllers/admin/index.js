const { Router } = require('express');
const router = Router();
const ctrl = require('./admin.ctrl');

// [middleware add]
function testMiddleware(req, res, next) {
    console.log("1st middleware!");
    next();
}

function testMiddleware2(req, res, next) {
    console.log("2st middleware!");
    next();
} 

router.get('/', testMiddleware, (req,res) => {
    res.send("admin Page.");
});

router.get('/products', ctrl.get_products);

router.get('/products/write', ctrl.get_products_write);

router.post('/products/write', ctrl.post_products_write);

module.exports = router;