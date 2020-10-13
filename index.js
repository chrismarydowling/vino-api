// Do the import thing! As a point of interest express 
// exports a function
const express = require('express');
const mongoose = require('mongoose');

const port = 4545;

let app = express();

app.get('/hello', (req, res) => {
    res.send('hello world');
});

function start() {
    app.listen(port, () => {
        console.log("Server is up and running on " + port + "!");
    });
}

mongoose.connect("mongodb://localhost/vino", { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', start);
