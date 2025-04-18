import React from "react";
import "./Scroller.css";

export default function Scroller({ children, className = "", style = {} }) {
  return (
    <div className={`scroller-container ${className}`} style={style}>
      {children}
    </div>
  );
}
