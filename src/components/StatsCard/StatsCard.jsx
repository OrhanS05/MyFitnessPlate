import React from "react";
import "./StatsCard.css";
import Button from "../Button/Button";

function StatsCard({ title, consumed, goal, onEdit }) {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <h3>{title}</h3>
        <Button text="Bewerken" className="blue" onClick={onEdit} />
      </div>

      <div className="stats-card-body">
        <p>Gelopen: {consumed}</p>
        <p>Doel: {goal}</p>
      </div>
    </div>
  );
}

export default StatsCard;
