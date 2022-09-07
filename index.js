const express = require('express');
const dotenv = require('dotenv');

//const res = require('express/lib/response');

//const port = 3000;
const path = require('path');
console.log(path);
const { connectDB } = require('./src/db')
dotenv.config()
const app = express();
connectDB();

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

app.listen(process.env.PORT, () => {
    console.log(`Server is now running on port ${process.env.PORT}`)
});

