import React, { useState } from 'react';

export function AddCatForm({ onAddCat }) {
  const [name, setName] = useState('');
  const [latinName, setLatinName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && latinName && image) {
      onAddCat({ id: Date.now(), name, latinName, image });
      setName('');
      setLatinName('');
      setImage('');
    }
  };

  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Latin Name:
          <input type="text" value={latinName} onChange={(e) => setLatinName(e.target.value)} />
        </label>
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}
