const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: "./../config.env" });

const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});
