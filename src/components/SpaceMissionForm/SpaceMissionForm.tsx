import React, { useState } from 'react';

const SpaceMissionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('Mars');

  const planets = ['Mars', 'Venus', 'Jupiter', 'Saturn'];

  return (
    <div>
      <h2>🚀 Space Mission Registration</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
        {planets.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <div>
        {name.trim() === '' ? (
          <p>Please enter your name to begin your mission.</p>
        ) : (
          <p>🧑‍🚀 Astronaut {name} is headed to {planet}!</p>
        )}
      </div>
    </div>
  );
};

export default SpaceMissionForm;