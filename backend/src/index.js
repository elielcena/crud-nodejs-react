const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = 8282;

const app = express();

mongoose.connect('mongodb://mongo:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(PORT);