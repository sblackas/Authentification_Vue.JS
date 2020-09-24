const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10; // le nombre de fois que l'on hashe le mdp
const config = require('./config');
const jwt = require('jsonwebtoken');



// Les routes on utilise ici des post car il s'agit de formulaire à remplir

// Route pour le sign up

router.post('/', function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        let newUser = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}','${req.body.email}','${hash}')`; // on a remplacé '${req.body.password}' par hash au moment de crypter le mdp
        db.query(newUser, function (err, result) { // envoyer mon newUser dans ma database
            if (err) throw err;
            console.log("one user inserted");


            db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) { 
              if (err) throw err;
              let token = jwt.sign({ id: result[0].id }, config.secret, {expiresIn: 86400 });
              console.log(token);
              res.status(200).send({ auth: true, token: token, user: result[0] });
            })
            
    
            });
    
    
    });


});

// Route pour le sign in pour l'authentification

  router.post('/login', function(req, res) {

      db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) { // *=tout
        if (err) throw err;
        bcrypt.compare(req.body.password, result[0].password, function(err,resultat){
            console.log(resultat);
            if(resultat) {
              let token = jwt.sign({ id: result[0].id }, config.secret, { expiresIn: 86400 });
              console.log(token);
              res.send({ auth: true, token: token, user: result[0] }); 
            } else {
              res.status(400).send("sorry we don't know this user") //rajout de .status(400)
            }

        })


        // let passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password);
        // if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
        // let token = jwt.sign({ id: result[0].id }, config.secret, { expiresIn: 86400 // expires in 24 hours
        // });
        // console.log(token);
        // res.status(200).send({ auth: true, token: token, user: result[0] });
      });

    
  });


  
  
module.exports = router;