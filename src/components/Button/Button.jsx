import React from "react";
import "./Button.css";

function Button({ text, onClick, className = "", disabled = false }) {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
