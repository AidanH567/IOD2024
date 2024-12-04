const express = require("express");
const amiiboRoute = require("./routes/amiiboRoute");
const app = express();
const PORT = 8080;

app.use(express.json());

// Mount the Amiibo API routes
app.use("/api/amiibo", amiiboRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
