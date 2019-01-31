const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const  genres = require('./routes/genres');

const home = require('./routes/home')

app.use('/api/genres',genres);

app.use('/',home);

//Using home router


// Setting template engine
app.set('view engine','pug');
app.set('views','./views'); //default




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));