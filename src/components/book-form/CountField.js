import React from "react";

export default function CountField({
  itemName,
  itemCount,
  incrementCount,
  decrementCount,
}) {
  return (
    <div className="count-field">
      <span className="count">{itemCount}</span>
      <span className="count-item">{itemName}</span>

      <button className="increment" onClick={incrementCount}>
        +
      </button>
      <button className="increment" onClick={decrementCount}>
        -
      </button>
    </div>
  );
}
