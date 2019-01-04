const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const ejs = require('ejs');

require('./config/db');

const users = require('./routes/users');
let ideas = require('./models/idea');

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/users', users);

app.get("/success",(req,res)=>{
    res.send("You signIn/signUp successfully");
});

const port = 3000;

app.listen(port, () => {
    console.log(`the app has been started at port ${port}`);
});
