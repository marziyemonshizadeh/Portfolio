// myInfo is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  heroPageImgUrl: {
    type: String,
    required: true,
  },
  aboutMePageImgUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  address:{
    type: String,
    required: true,
  }
});

const model = mongoose.models.myInfo || mongoose.model("myInfo", schema);
export default model;
