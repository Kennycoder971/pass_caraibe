import React, { useState } from "react";

export default function DrowpdownChild({ children, total }) {
  return (
    <div className="dropdown-child">
      <div className="dropdown-child-element">
        {total && <div className="total"> {total} € </div>}

        <div className="pass-type">
          <span className="passname green-txt">Passintégral</span>{" "}
          <span className="dropdown-arrow">v</span>{" "}
        </div>
        <div className="pass-type">
          <span className="passname turquoise-txt">Guadeloupe</span>{" "}
          <span className="dropdown-arrow">v</span>{" "}
        </div>
        {children}
      </div>
    </div>
  );
}
