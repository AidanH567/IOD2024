const app = require("./app");
const port = 3000;
// Second Server
const app1 = require("./app");
const port1 = 2000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // app1.use("/", express.static("public")); // Serve static files for the second app
// // app1.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// // app1.listen(port1, () => {
// //   console.log(`Example app listening at http://localhost:${port1}`);
// // });
