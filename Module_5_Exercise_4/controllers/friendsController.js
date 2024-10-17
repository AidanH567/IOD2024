// controllers/friendsController.js
const friends = require("../models/friends");

const getAllFriends = (req, res) => {
  res.json(friends);
};

const filterFriends = (req, res) => {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter;
  let matchingFriends = [...friends];

  if (filterGender) {
    matchingFriends = matchingFriends.filter(
      (friend) => friend.gender === filterGender
    );
  }

  if (filterLetter) {
    matchingFriends = matchingFriends.filter((friend) =>
      friend.name.toLowerCase().startsWith(filterLetter.toLowerCase())
    );
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({
      error: `No friends matching gender ${filterGender} or starting letter ${filterLetter}`,
    });
  }
};

const getFriendInfo = (req, res) => {
  const userAgent = req.headers["user-agent"];
  const contentType = req.headers["content-type"];
  const accept = req.headers["accept"];

  res.json({
    userAgent,
    contentType,
    accept,
  });
};

const getFriendById = (req, res) => {
  let friendId = req.params.id;
  let friend = friends.find((friend) => friend.id === Number(friendId));

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
};

const addFriend = (req, res) => {
  let newFriend = req.body;

  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  let friendId = req.params.id;
  let updatedFriend = req.body;

  let friendIndex = friends.findIndex(
    (friend) => friend.id === Number(friendId)
  );

  if (friendIndex !== -1) {
    friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend };

    res.json({
      result: "Updated friend with ID " + friendId,
      data: friends[friendIndex],
    });
  } else {
    res.status(404).json({ error: "Friend not found" });
  }
};

module.exports = {
  getAllFriends,
  filterFriends,
  getFriendInfo,
  getFriendById,
  addFriend,
  updateFriend,
};
