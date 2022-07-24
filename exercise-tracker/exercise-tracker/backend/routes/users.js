const router = require('express').Router();
let User = require('../models/user.model');

//Router for running a GET request
router.route('/').get((req, res) => {
    User.find() //The find() method returns all the users from the MongoDB database.
        .then(users => res.json(users)) //If the user exists return it in JSON format.
        .catch(err => res.status(400).json('Error: ' + err)); //Else a 400 error is generated.
});

//Router for running a POST request
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username}); //Create new instance of User

    newUser.save()
        .then(() => res.json('User added!')) //The user was created successfully.
        .catch(err => res.status(400).json('Error: ' + err)); //An error was detected.
})

module.exports = router;