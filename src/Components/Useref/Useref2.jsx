import React, { useState, useEffect, useRef } from "react";

const RefHook1 = () => {
  const [userInput, setUserInput] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <div>The number of times comp re</div>
      <p>Some paragraph content</p>
      <p style={{ color: "black" }}>The number of times comp render: {count.current}</p>
    </>
  );
};

export default RefHook1;
