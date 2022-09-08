const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const { connectDB } = require('./src/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const cookieParser = require('cookie-parser')

dotenv.config();
const app = express();
connectDB();

app.use(cookieParser())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));



// Set the view engine to ejs
app.set('view engine', 'ejs')
// Update the location of the views folder that res.render uses
app.set('views', path.join(__dirname, 'src/templates/views'))

app.get('/', (req, res) => {
    res.render('dashboard')
});

// Need this middleware so that form data is added to request
app.use(express.urlencoded({ extended: true }))

// Initialize routes
const initRoutes = require('./src/routes');
initRoutes(app);


app.listen(process.env.PORT, () => {
    console.log(`Server is now running on port ${process.env.PORT}`)
})