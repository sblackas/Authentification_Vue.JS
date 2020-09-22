const express = require('express');
const router = express.Router();
const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10; // le nombre de fois que l'on hashe le mdp



// Les routes on utilise ici des post car il s'agit de formulaire à remplir

// Route pour le sign up

router.post('/', function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        let newUser = `INSERT INTO users (name, email, password) VALUES ('${req.body.name}','${req.body.email}','${hash}')`; // on a remplacé '${req.body.password}' par hash au moment de crypter le mdp
        db.query(newUser, function (err, result) { // envoyer mon newUser dans ma database
            if (err) throw err;
            console.log("one user inserted");
            res.send(result);
    
            });
    
    
    });


});

// Route pour le sign in pour l'authentification

  router.post('/login', function(req, res) {

      db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) { // *=tout
        if (err) throw err;
        bcrypt.compare(req.body.password, result[0].password, function(err,resultat){
console.log(result);
if(resultat) {
  res.send("you are authenticated")
} else {
  res.send("sorry we don't know this user")
}

        })
        // if (req.body.password === result[0].password)
        // console.log("you are authenticated"); 
        // else 
        // console.log("Sorry, we don't know this user");
        // res.send(result);
        
      });

    
  });


  
  
module.exports = router;