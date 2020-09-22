const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'usersdb'
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database");
//     let post = "INSERT INTO `compte`(`name`,`email`,`password`) VALUES ('"+req.body.name+"','"+req.body.email+"','"+req.body.password+") ";
// connection.query(post, function (err,result) {
//     if (err) throw err;
//     console.log("one user inserted");
//     });
});


module.exports = connection;