const express = require("express");
const app = express();
const port = 3000;

const testRoutes = require("./Routes/testRoutes");
const calculatorRoutes = require("./Routes/calculatorRoutes");

app.use("/", express.static("public"));

app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Second Server

const app1 = express();
const port1 = 2000;

app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.use("/", express.static("public"));

app.listen(port1, () => {
  console.log(`Example app listening
at http://localhost:${port1}`);
});

// import all user routes (up top in index.js)
const userRoutes = require("./Routes/userRoutes");
// map the user routes to our app
app.use("/users", userRoutes);
