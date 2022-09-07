const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello World')
});

//initalize routes
const initRoutes = require('./src/routes');
initRoutes(app);

app.listen(port, () => {
    console.log(`Server is now running on port ${port}`)
});

