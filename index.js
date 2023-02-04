const express = require("express");
const mongoose = require('mongoose');
const body_parser = require("body-parser");
const path  = require('path');
const pug=  require('pug');
const updateRouter = require('./update-router');


const app = express();


mongoose
    .connect("mongodb://raj:1234@mongo:27017/?authSource=admin")
    .then(() => console.log("Successfully connected to database"))
    .catch((e) => console.log(e))


app.get("/", (req,res) => {
    res.send("<h2>I am back with hope</h2>")
})
const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log('listning on port ${port}'))

const NotesSchema = mongoose.Schema({
    title : String,
     description : String,

})

const Notes = mongoose.model("Notes", NotesSchema);

module.exports =Notes;

var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });