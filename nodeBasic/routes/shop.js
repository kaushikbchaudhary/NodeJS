const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res, next) => {
    res.send('<h1>Hello! from express</h1>');
    // next(); // Allows the request to continue to the next middleware in line
});

module.exports = router;