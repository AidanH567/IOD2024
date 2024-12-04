const express = require("express");
const {
  getCharactersByGameSeries,
  getCharacterById,
} = require("../controllers/amiiboController");
const router = express.Router();

// Route for query-based requests
router.get("/", getCharactersByGameSeries);

// Route for params-based requests
router.get("/:id", getCharacterById);

module.exports = router;
