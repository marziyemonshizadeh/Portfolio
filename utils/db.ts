const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    // if connected
    if (mongoose.connections[0].readyState) {
      console.log("connected az ghabl :)");
      return false;
    } else {
      try {
        await mongoose.connect("mongodb://localhost:27017/portfolio");
        console.log("connected to db");
        
      } catch (err) {
        console.log("have error to connect to db");       
        console.log('error: ' + err)
      }
      // await mongoose.connect("mongodb://localhost:27017/portfolio");
      // console.log("connected to db successfully :)");
    }
  } catch (err) {
    console.log("connectToDB err => ", err);
  }
};
export default connectToDB;
