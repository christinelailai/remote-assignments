const express = require('express');
const router = express.Router();





router.get(`/`,(req,res) => {
    let text = '';
    if(!req.query.number) {
        text='Lack of Parameter'

    } else if (Number.isNaN(req.query.number)|| req.query.number <= 0 || req.query.number % 1 !== 0) {
        text='Wrong Parameter'
    }  else {
        text=((parseInt(req.query.number) + 1) * req.query.number/2).toString();
    }
    res.send(text);
});





module.exports = router;