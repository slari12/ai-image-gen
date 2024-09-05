import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectdb from "./mongodb/connect.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("hello wolrd");
});

const startServer = () => {
  try {
    connectdb(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server is running on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();

// passwrof mongodb
// TShMTyZubf3axNhX
