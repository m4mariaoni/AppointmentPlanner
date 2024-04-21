import React, {useState} from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
    console.log("Items:", items);

    return (
      <div>
        {items.length > 0 ? (
          items.map((item, index) => (
            <Tile key={index} name={item.name} description={item.description} />
          ))
        ) : (
          <p>No items to display.</p> // Placeholder message when items is empty
        )}
      </div>
    );
  };
