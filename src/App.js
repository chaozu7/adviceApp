import React from 'react';
import { useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState('');

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>Your advice for today</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get an advice</button>
    </div>
  );
}
