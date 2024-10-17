const express = require("express");
const app = express();
const app1 = express();
const testRoutes = require("./Routes/testRoutes");
const calculatorRoutes = require("./Routes/calculatorRoutes");
const userRoutes = require("./Routes/userRoutes");

app.use("/", express.static("public")); // Serve static files
app.use(express.json()); // Middleware to parse JSON requests

app1.use("/", express.static("public")); // Serve static files
app1.use(express.json()); // Middleware to parse JSON requests

//Routes
app.use("/users", userRoutes);
app.use("/mytest", testRoutes);
app.use("/calculator", calculatorRoutes);

// export the app
module.exports = app;
