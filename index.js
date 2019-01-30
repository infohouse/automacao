var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");
var morgan = require('morgan');
var nodemailer = require('nodemailer');

var app = express();

var porta = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes/index'));


app.use(express.static(path.join(__dirname, 'public')));


app.listen(porta, function(){

    console.log("escutando na porta "+porta);
});