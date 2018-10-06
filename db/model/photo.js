module.exports = (mongoose, Schema) => {
  const Photo = mongoose.model(
    "Photo",
    new Schema({
      time: Date,
      description: String
    })
  );
  return Photo;
};
