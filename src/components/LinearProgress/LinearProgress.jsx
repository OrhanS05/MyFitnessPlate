import React from "react";
import "./LinearProgress.css";

function LinearProgress({ value, goal, color }) {
  const progressPercent = Math.min((value / goal) * 100, 100);

  return (
    <div className="linear-progress">
      <div
        className="linear-progress-bar"
        style={{ width: `${progressPercent}%`, backgroundColor: color }}
      ></div>
    </div>
  );
}

export default LinearProgress;
