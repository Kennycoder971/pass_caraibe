import React, { useState } from "react";

export default function DrowpdownField({ children, itemName, total }) {
  const [displayChild, setDisplayChild] = useState(false);
  return (
    <div className="dropdown-field">
      <div
        className="dropdown-info"
        onClick={() => setDisplayChild(!displayChild)}
      >
        <span className="dropdown-item-name">{itemName}</span>
        <span className="dropdown-arrow">v</span>
        {total && <span className="dropdown-amount"> {total} €</span>}
      </div>
      {displayChild && children}
    </div>
  );
}
