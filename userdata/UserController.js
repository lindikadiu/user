// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./Users');

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send(UserController/*"There was a problem finding the user."*/);
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {

    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


router.post('/', function (req, res) {
    User.create({
      name : req.body.name,
      lastname : req.body.lastname,
      email : req.body.email,
      car : req.body.car,
      password : req.body.password
        },
        function (err, user) {
            if (err) return res.status(500).send(err/*"There was a problem adding the information to the database."*/);
            res.status(200).send(user);
        });
});
module.exports = router;
/*
// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ user.name +" was deleted.");
    });
});
*/
