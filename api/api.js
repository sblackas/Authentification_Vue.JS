const express = require("express");
const api = express();
const bodyParser = require('body-parser')
// const mysql = require('mysql2');
const routes = require("./src/routes/routes")


api.use(bodyParser.json());
api.use(bodyParser.urlencoded({extended: true}));
api.use("/", routes);



api.listen(8000, function () {
    console.log('Server listening on port 8000');
    });