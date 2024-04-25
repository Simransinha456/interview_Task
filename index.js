const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const loginRoutes = require("./Routes/loginRoute.js");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

const mongoUrl = process.env.MONGO_URL;

const connect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connect();

app.get("/", (req, res) => {
  res.send("Backend Api Working");
});

app.use("/userdetail", loginRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});