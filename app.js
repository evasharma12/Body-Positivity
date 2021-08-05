const express = require('express');
const path = require('path');
const routes = require("./routes/index");
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//using body-parser’s urlencoded method allows us to handle data sent as application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({extended: true}));

//We are telling our express app to use routes directory whenever a request from / route comes
app.use('/', routes);

app.use(express.static('public'));

module.exports = app;