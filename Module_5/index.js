const express = require("express");
const app = express();
const port = 3000;
const app1 = express();
const port1 = 80;
const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./Routes/calculatorRoutes"); // For `routes` folder in the current directory.




app.use("/mytest", testRoutes);

//Routes

app.use("/calculator", calculatorRoutes);

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
