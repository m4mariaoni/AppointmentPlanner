import React from "react";

export const Tile = ({ name, description }) => {
    console.log(`name: ${name}, description: ${description}`);


  return (
    <div className="tile-container">
      <p className="tile-title tile">
        {name}
      </p>
      {description?.map((value, index) => ( // Use optional chaining
        <li key={index} className="tile">
          {value}
        </li>
      ))}
    </div>
  );
};