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
