const User = require('../models/user');
function createUser(name,age,email){
    const newUser = new User({name,age,email})
    return newUser.save()
}
module.exports = createUser;