const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("contacts Page.");
})

router.get('/list', (req, res) => {
    res.send("contacts List Page.");
})

module.exports = router;