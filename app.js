const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes/router')

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);

app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port);
})