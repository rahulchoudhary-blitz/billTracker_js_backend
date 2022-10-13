const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./connection/config");
const api = require("./api/index");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", api);

const port = 4000;
app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`server is started ${port}`);
});
