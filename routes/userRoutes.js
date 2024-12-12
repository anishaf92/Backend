const express = require('express');
const User = require('../models/user');
const router = express.Router()
router.post('/signUp',(req,res) => {
    console.log(req.body)
    const {name,age,email} = req.body;
    const newUser = new User({name,age,email})
    newUser.save()
    .then(() => res.send('Signed up'))
    .catch((err) => res.send(err))
    
})
router.get('/getUsers',(req,res) => {
    User.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err))
})
module.exports = router;