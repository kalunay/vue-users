const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');
const { routes } = require('./src/routes');

// connect to db
mongoose.set("strictQuery", false);
mongoose.connect(
    'mongodb://localhost:27017/users',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

// init app
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.forEach(item => {
    app.use(`/api/v1/${item}`, require(`./src/routes/${item}`));
});

// routs
const PORT = 3000;
http.createServer({}, app).listen(PORT);
console.log(`Server running at ${PORT}`);