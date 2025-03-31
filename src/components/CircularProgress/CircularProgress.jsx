import React from "react";
import "./CircularProgress.css";

function CircularProgress({ value, max, color }) {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="circular-progress" width="120" height="120">
      <circle
        className="circular-progress-bg"
        stroke="#fff"
        fill="transparent"
        strokeWidth="10"
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        className="circular-progress-bar"
        stroke={color}
        fill="transparent"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        r={radius}
        cx="60"
        cy="60"
        style={{ transition: "stroke-dashoffset 0.5s" }}
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        dy=".3em"
        fill="#fff"
        fontSize="16"
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
}

export default CircularProgress;
