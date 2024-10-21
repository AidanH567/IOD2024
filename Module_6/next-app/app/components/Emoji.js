"use client";
import React, { useState } from 'react';

const Emoji = () => {
  const [mood, setMood] = useState('happy');

  const moodToEmoji = {
    happy: '🙂',
    sad: '😢',
  };

  const toggleMood = () => {
    setMood((prevMood) => (prevMood === 'happy' ? 'sad' : 'happy'));
  };

  return (
    <div className="Emoji">
      <h1>Current Mood: {moodToEmoji[mood]}</h1>
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
