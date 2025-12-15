import React, { useState, useEffect } from 'react';

const UseEffectFile = () => {
  const [count, setCount] = useState(0);

  // Runs on every render
  useEffect(() => {
    console.log("Component rendered every time!");
  });

  // Runs only on mount
  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  // Runs when 'count' changes
  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectFile;
