// project is entity
const { default: mongoose } = require("mongoose");

const schema = mongoose.Schema({
  img: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 150,
    required: true,
  },
  description: {
    type: String,
    minLength: 3,
    maxLength: 200,
    required: true,
  },
  title: {
    type: String,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  demoUrl: {
    type: String,
    minLength: 10,
    maxLength: 150,
    required: true,
  },
  githubUrl: {
    type: String,
    minLength: 10,
    maxLength: 150,
    required: true,
  },
});

//have error
const model = mongoose.models.project || mongoose.model("project", schema);
export default model;
