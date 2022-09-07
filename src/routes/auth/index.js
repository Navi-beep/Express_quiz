const MainAuthRouter = require('express').Router();

MainAuthRouter.get('/', (req, res)=>{
    res.send('Main Auth Router')
})

MainAuthRouter.route('/register')
.get((req, res) => { res.send('Main Auth Router Register')
})
.post((req, res) => { res.send('Main Auth Router')
})





module.exports = MainAuthRouter