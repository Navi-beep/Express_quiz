const express = require('express');
//const res = require('express/lib/response');
const app = express();
const port = 3000;
const path = require('path');
console.log(path);


app.get('/', (req, res) => {
res.send('Hello World')
});

//set the view to engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/templates/views'))


app.use(express.urlencoded({ extended: true}))
//initalize routes

const initRoutes = require('./src/routes');
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
});

