const express = require("express");
const app = express();
const vehicles = require("./routes/vehicle");
const PORT = 4000;
const connectDB = require("./db/connect");

const path = require("path");
require("dotenv").config();
// middleware
app.use(express.json());

app.use("/api/v1/vehicles", vehicles);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
