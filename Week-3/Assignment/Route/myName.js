const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    const name = req.cookies.name;
    res.render("myName.ejs",{name: name})
})

module.exports = router;
