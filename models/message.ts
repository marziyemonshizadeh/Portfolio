// message is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    uppercase: true,
  },
  email: {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    required: true,
  },
  subject: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  body: {
    type: String,
    minLength: 3,
    maxLength: 500,
    required: true,
  },
});

const model = mongoose.models.message || mongoose.model("message", schema);
export default model;
