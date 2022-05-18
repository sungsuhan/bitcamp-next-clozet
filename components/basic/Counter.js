import React from 'react';

export function Counter({ onIncrease, onDecrease, number }){
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
};