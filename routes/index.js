var express = require("express");
var nodemailer = require('nodemailer');
var router = express.Router();

router.get("/", function(req, res){
    res.render('index', {title: "Home"});
});

router.get("/contato", function(req, res){
    res.render('contato', {title: "Contato"});
});

router.post("/contato", function(req, res){

    console.log(req.body);
    var email = nodemailer.createTransport({

        service: 'gmail',
        port: 25,
        auth: {
            user: 'sipmppi@gmail.com',
            pass: 'ppi@214284'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    var corpo = {
        From: req.body.email,
        to: "domoticon@domoticon.com.br",
        subject: "Contato - Cliente",
        html: "<b>Nome</b><br />"+ req.body.nome +" <br/><b>email</b><br /> "+ req.body.email +" <br/> <b>msg</b><br /> "+ req.body.mensagem +" <br/>"
        
    };
    
    email.sendMail(corpo, function(error, info){
    
        if(error){
            console.log("erro... "+error);
        };
        console.log("Mensagem entregue");
        console.log(info);
    });
    res.render('contato', {title: 'enviado'});
});


module.exports = router;