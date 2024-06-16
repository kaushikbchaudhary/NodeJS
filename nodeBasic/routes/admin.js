const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send(`<form method="post" action="/product"> <input type="text" name="title"><button type='submit'>Clic here</button></form>`)
    res.send('<h1>Welcome!</h1>');
    // next(); // Allows the request to continue to the next middleware in line
});

router.get('/product', (req, res, next) => {
    message = JSON.stringify(req.body.title);
    console.log(`the final product is:-${JSON.stringify(req.body.title)}`);
    res.redirect("/dashboard");
});

module.exports = router;