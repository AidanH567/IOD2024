const express = require("express");
const app = express();
const port = 3000;
const app1 = express();
const port1 = 80;
const testRoutes = require("./routes/myTestRoutes");
app.use("/mytest", testRoutes);

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`);
});

app1.get("/", (req, res) => {
  res.send("Hello Dude!");
});

app1.listen(port1, () => {
  console.log(`Example app listening
at http://localhost:${port1}`);
});

app.use("/", express.static("public"));
