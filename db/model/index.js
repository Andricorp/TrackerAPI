const mongoose = require("mongoose");


// mongoose.connect("mongodb://localhost/Diary");
// const Diary = require('../connect')

const Schema = mongoose.Schema;
const db = mongoose.connection;

const Trip = require("./trip")(mongoose, Schema);
const Track = require("./track")(mongoose, Schema);
const Photo = require("./photo")(mongoose, Schema);

async function fillDB() {

  let track = new Track({
    file: [123.34, 3443.4545, 45456.34535]
  });
  let photo = new Photo({
    description: "Nice photo!",

  });
  let trip = new Trip({
    description: "That was amasing Trip!"
  });
  await track.save(function(err, track, affected){
    console.log(arguments);
  });
  await trip.save();
  await photo.save();
}
fillDB();


module.exports.data = {
  db,
  Track,
  Trip,
  Photo,
  fillDB
};
