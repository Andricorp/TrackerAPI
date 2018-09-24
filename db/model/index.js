const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;
const db = mongoose.connection;

// const userSchema = require('./track')(Schema);
// const User = require('./track')(mongoose, Schema)
const Track = require('./track')(mongoose, Schema)


// userSchema = new Schema({
//     email: String,
//     password: String,
//     name: String,
//     phones: [String],
// });
// const User = mongoose.model('User', userSchema)


async function fillDB() {

    // var vasya = new User({
    //     email: "vasya@sample.com",
    //     password: "123",
    //     name: "Vasisualiy Poopkine",
    //     phone: ["101", "102", "103"]
    // })
    var sifrGenerator = new Track({
        file: "some file"
    })

    return await sifrGenerator.save()
    // return await vasya.save()
}
module.exports.data = {
    db,
    // User,
    Track,
    fillDB
}