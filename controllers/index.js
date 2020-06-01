const { Router } = require('express');
const router = Router();


router.use('/admin', require('./admin'));
router.use('/contact', require('./contact'));

module.exports = router;