// library is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});

const model = mongoose.models.library || mongoose.model("library", schema);
export default model;
