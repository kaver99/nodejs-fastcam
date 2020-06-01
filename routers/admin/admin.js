const express = require('express');
const router = express.Router();

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

router.get('/products', (_, res) => {
    res.render('admin/products.html', {
        message: "Hello World"
    });
});

router.get('/products/write', (_, res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req, res) => {
    res.send(req.body);
});

module.exports = router;