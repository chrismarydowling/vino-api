// Do the import thing! As a point of interest express
// exports a function
const express = require('express');
const mongoose = require('mongoose');

const port = 4545;

let app = express();

app.use(express.json()); // Tell express how to parse json bodies

let bottleSchema = new mongoose.Schema({
  name: String,
  country: String,
  colour: String,
  year: Number,
  grape: String
});

let Bottle = mongoose.model('Bottle', bottleSchema);




app.get('/bottles', (req, res) => {
  Bottle.find((err, bottles)=>{
    if(err) {
      console.log(err);
    }
    console.log(bottles[0]);
    res.send(JSON.stringify(bottles));
  });

});

app.post('/bottles', (req, res) => {
    let bottleData = req.body;
    console.log(bottleData);
    // TODO:
    // 1. Create a new Bottle with bottleData
    // 2. Save it
    let bottle = new Bottle(bottleData);
    bottle.save();

    res.send("OK");
});

function start() {

  let bottle1 = new Bottle ({
    name: "test bottle",
    country: "germany",
    colour: "red",
    year: 2012,
    grape: "pinot noir"
  });

  // bottle1.save(() =>  {
  //  console.log("saved the bottle?")
  //});

    app.listen(port, () => {
        console.log("Server is up and running on " + port + "!");
    });
}

mongoose.connect("mongodb://localhost/vino", { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', start);




[

      {
         name: "test bottle",
         country: "germany",
         colour: "red",
         year: 2012,
         grape: "pinot noir"
      },
      {
         name: "test bottle2",
         country: "germany",
         colour: "red",
         year: 2012,
         grape: "pinot noir"
      },
      {
         name: "test bottle3",
         country: "germany",
         colour: "red",
         year: 2012,
         grape: "pinot noir"
      }]
