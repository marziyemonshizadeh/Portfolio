const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    // if connected
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
        await mongoose.connect(process.env.MONGODB_URI);
        // await mongoose.connect("mongodb://root:kmz6RjjoZ4AWZFfNVucDabsM@monte-rosa.liara.cloud:30604/portfolio?authSource=admin");
        // await mongoose.connect("mongodb://0.0.0.0/portfolio");
    }
  } catch (err) {
    console.log("connectToDB err => ", err);
  }
};
export default connectToDB;
