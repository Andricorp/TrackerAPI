module.exports = (mongoose, Schema)=>{
    // const User = mongoose.model('User',  new Schema({
    //     email: String,
    //     password: String,
    //     name: String,
    //     phones: [String],
    // }))
    // return User;
    const Track = mongoose.model('User',  new Schema({
        file: String,
    }))
    return Track;
}
