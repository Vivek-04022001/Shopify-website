import React from "react";
import "./bubble.css";


const BubbleText = ({children}) => {
  return (
    <h2 className="text-center text-lg text-indigo-100">
      {children.split("").map((child, idx) => (
        <span className='hoverText' key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;