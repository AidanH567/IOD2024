const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

const app1 = express();
const port1 = 2000;

// Second App
app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.use("/", express.static("public"));

app.listen(port1, () => {
  console.log(`Example app listening
at http://localhost:${port1}`);
});
