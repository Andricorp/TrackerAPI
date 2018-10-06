module.exports = (mongoose, Schema) => {
  const Trip = mongoose.model(
    "Trip",
    new Schema({
      // : String,
      description: String
    })
  );
  return Trip;
};
