// skill is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  imgUrl: {
    type: String,
    required: true,
  },
  Percent: {
    type: Number,
    required: true,
  },
});

//have error
const model = mongoose.models.skill || mongoose.model("skill", schema);
export default model;
