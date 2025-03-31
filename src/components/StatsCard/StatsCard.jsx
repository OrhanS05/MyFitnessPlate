import React from "react";
import "./StatsCard.css";
import Button from "../Button/Button";
import LinearProgress from "../LinearProgress/LinearProgress";

function StatsCard({ title, consumed, goal, onEdit }) {
  const progressColor = title === "Stappen" ? "red" : "blue";

  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <h3>{title}</h3>
        <Button text="Bewerken" className="blue" onClick={onEdit} />
      </div>
      <div className="stats-card-body">
        <p>{title === "Stappen" ? "Gelopen" : "Ingenomen"}: {consumed}</p>
        <p>Doel: {goal}</p>
        <LinearProgress value={consumed} goal={goal} color={progressColor} />
      </div>
    </div>
  );
}

export default StatsCard;
