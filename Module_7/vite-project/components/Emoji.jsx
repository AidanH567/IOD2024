import React, { useContext } from 'react';
import { EmojiContext } from '../context/EmojiContext';

const Emoji = () => {
  const { mood, moodToEmoji, toggleMood } = useContext(EmojiContext);

  return (
    <div className="Emoji">
      <h1>Current Mood: {moodToEmoji[mood]}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
