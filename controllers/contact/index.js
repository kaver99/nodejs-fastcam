const { Router } = require('express');
const router = Router();
const ctrl = require('./contact.ctrl');

router.get('/', ctrl.get_root);

router.get('/list', ctrl.get_list);

module.exports = router;