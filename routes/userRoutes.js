const express = require('express');
const User = require('../models/user');
const createUser = require('../controllers/userController')
const router = express.Router()
router.post('/signUp',(req,res) => {
    console.log(req.body)
    const {name,age,email} = req.body;
    createUser(name,age,email)
    .then(() => res.send('Signed up'))
    .catch((err) => res.send(err))
    
})
router.get('/getUsers',(req,res) => {
    User.find()
    .then((data) => res.json(data))
    .catch((err) => res.send(err))
})
router.put('/editUser/:id',(req,res) => {
    const id = req.params.id
    const {email} = req.body
    console.log(id)
    User.findByIdAndUpdate(id,{"email":email},{new:true})
    .then(user => res.json(user))
    .catch(err => res.send(err))
})
router.delete('/deleteUser/:id',(req,res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
    .then(result => res.send(result))

})
module.exports = router;