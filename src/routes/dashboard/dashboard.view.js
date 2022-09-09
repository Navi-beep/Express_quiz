module.exports = (req, res) => {
    console.log(req.verifiedUser);
    res.render('dashboard', { user: req.verifiedUser.user })
}