const express = require("express")
const app = express();
const env = require("dotenv")
const mongoose = require("mongoose")
env.config()

const connectMongoDB = async () => {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.DATABASE_URL);
  //   console.log(connect);
    console.log(`Connection to MONGODB is successful`);
  };

const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


connectMongoDB()