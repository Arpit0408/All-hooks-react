import React, { useState, useEffect } from "react";
// import styled from "styled-components";

const ClearUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  const [hieghtCount, setHeightCount] = useState(window.screen.width);


  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };
  const currentScreenheight = () => {
    setHeightCount(() => window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    window.addEventListener("resize", currentScreenheight);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
      window.removeEventListener("resize", currentScreenheight);

    };
    
    
  });
  return (
    <>
      <div className="container">
        <h2>
          The size of the window is <span> {widthCount} </span>
          The size of the window is <span> {hieghtCount} </span>
        </h2>
      </div>
    </>
  );
};
ClearUp;
// const Wrapper = styled.section`
//   .container {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   h2 {
//     line-height: 5.2rem;
//     font-size: 4.2rem;
//   }
//   span {
//     color: #2e86c1;
//   }
// `;

export default ClearUp;