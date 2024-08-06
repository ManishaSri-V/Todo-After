const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5050;
const todoRoute = require("./route/todoRoute");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", todoRoute);

const MongoUrl =
  "mongodb+srv://rasurimanishasri:S1ryf8HP89FVLfcy@cluster0.zv8dxjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(MongoUrl, {});
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB successfully");
});

app.listen(port, () => {
  console.log("Server started on port" + " " + port);
});
