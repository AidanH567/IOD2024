const app = require("./app");
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Second Server
// const app1 = express();
// const port1 = 2000;

// // app1.use("/", express.static("public")); // Serve static files for the second app
// // app1.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });

// // app1.listen(port1, () => {
// //   console.log(`Example app listening at http://localhost:${port1}`);
// // });
