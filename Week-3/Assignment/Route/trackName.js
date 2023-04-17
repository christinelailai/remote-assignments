const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    if (req.query.name) {
        res.cookie("name", req.query.name);
    }
    res.redirect("/myName")
})

module.exports = router;