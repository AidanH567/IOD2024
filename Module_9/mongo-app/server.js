const express = require("express");
const app = express();
require("dotenv").config();
let userRoutes = require("./routes/userRoutes");
let dbConnect = require("./lib/dbConnect");

// parse requests of content-type -application / json;
app.use(express.json());
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to myMongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}.`);
});
