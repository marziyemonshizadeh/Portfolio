const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    // if connected
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      // await mongoose.connect(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI2);
    }
  } catch (err) {
    console.log("connectToDB err => ", err);
  }
};
export default connectToDB;
