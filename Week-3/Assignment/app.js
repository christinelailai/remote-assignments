const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const cookieParser = require('cookie-parser')
const port = 3000;

const dataRoute = require('./Route/data.js');
const myNameRoute = require('./Route/myName.js')
const trackNameRoute = require('./Route/trackName.js')

app.use(cookieParser());

app.use(express.static('views'));


app.use('/trackName',trackNameRoute)


app.use('/myName',myNameRoute);

app.use('/data',dataRoute);

app.get('/',(req,res) => {
    res.render('index.ejs',{text: ""})
});


app.listen(port,() => {
    console.log('port:3000')
})
