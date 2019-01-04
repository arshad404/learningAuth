const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

let ideas = require('../models/idea');


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', (req, res) =>{
    console.log(req.body);
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    new ideas(newUser)
        .save()
        .then(() => {
            res.redirect('/success');
        });
});

module.exports = router;