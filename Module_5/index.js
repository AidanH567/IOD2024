const express = require("express");
const app = express();
const port = 3000;
const testRoutes = require("./Routes/testRoutes");
const calculatorRoutes = require("./Routes/calculatorRoutes");
const userRoutes = require("./Routes/userRoutes");

app.use("/", express.static("public")); // Serve static files
app.use(express.json()); // Middleware to parse JSON requests

app.use("/users", userRoutes);
app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Second Server
const app1 = express();
const port1 = 2000;

app1.use("/", express.static("public")); // Serve static files for the second app
app1.get("/", (req, res) => {
  res.send("Hello World!");
});

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});
