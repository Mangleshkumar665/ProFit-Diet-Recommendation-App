require("dotenv").config();

const connectDb = require("./db/connect");
const User = require("./models/users");


const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await User.deleteMany();
    console.log("Success !!!! , Now Exiting ");
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
