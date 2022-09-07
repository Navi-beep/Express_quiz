module.exports = (req, res) => {
    if (req.body.password !== req.body.confirmPass){
        res.send({error: 'Your passwords dont match'})
        return 
    }
    res.send('Post register from register')
}