import React, { createContext, useState } from 'react';

export const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [mood, setMood] = useState('happy');

  const moodToEmoji = {
    happy: '🙂',
    sad: '😢',
  };

  const toggleMood = () => {
    setMood((prevMood) => (prevMood === 'happy' ? 'sad' : 'happy'));
  };

  return (
    <EmojiContext.Provider value={{ mood, moodToEmoji, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};
