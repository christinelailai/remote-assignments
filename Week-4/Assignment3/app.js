const express = require('express')
const  query  = require('./assignment4')
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser())
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'ejs');


app.get('/',(req,res) => {
    res.render('homePage.ejs')
});

app.get('/memberPage',(req,res) => {
    res.render('memberPage.ejs')
});

app.post('/signup',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    query.selectAccount(email).then((result) => {
            if (result.length > 0) {
                res.send("ERROR");
            } else {
                query.signUp(email, password).then(() => {
                    res.send("OK");
                })
            }
        }).catch(err => {
            console.log(err);
        })
});

app.post('/signin',(req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    query.signIn(email, password).then((result) => {
        if (result.length > 0) {
            res.send("OK");
        } else {
            res.send("ERROR");
        }
    })
});







app.listen(3000, () => {
    console.log("Listening on port 3000!");
});