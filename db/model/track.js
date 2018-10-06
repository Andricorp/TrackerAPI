module.exports = (mongoose, Schema) => {
  const Track = mongoose.model(
    "Track",
    new Schema({
      file: []
    })
  );

  return Track;
};
