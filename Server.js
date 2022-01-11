const express = require("express");
const cors = require("cors");
const port = 4002;
require("./config/db");
const path = require("./controller/router");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("Server is up and running");
});

app.use("/api", path);

app.listen(port, () => {
  console.log(`Server is listening to ${port}`);
});
