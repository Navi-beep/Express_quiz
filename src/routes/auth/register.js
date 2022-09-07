const { User } = require('../../models');

module.exports = (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({error: 'Your passwords dont match'})
        return 
    }
    const { username, email, password } = req.body
    res.send('Post register from register')
}