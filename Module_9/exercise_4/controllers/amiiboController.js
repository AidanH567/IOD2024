const axios = require("axios");

const getCharactersByGameSeries = async (req, res) => {
  try {
    // Query parameter example: filtering by game series
    const { gameseries } = req.query;
    const url = gameseries
      ? `https://www.amiiboapi.com/api/amiibo/?gameseries=${gameseries}`
      : `https://www.amiiboapi.com/api/amiibo/`;

    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch characters", details: error.message });
  }
};

const getCharacterById = async (req, res) => {
  try {
    // Params example: fetching character by Amiibo ID
    const { id } = req.params;
    const response = await axios.get(
      `https://www.amiiboapi.com/api/amiibo/?id=${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch character by ID",
      details: error.message,
    });
  }
};

module.exports = { getCharactersByGameSeries, getCharacterById };
