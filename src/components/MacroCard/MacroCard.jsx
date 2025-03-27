import React from "react";
import Button from "../Button/Button";
import "./MacroCard.css";

function MacroCard({ name, consumed, goal, color, onEdit }) {
  return (
    <div className="macro-card">
      <h3>{name}</h3>

      <div className="circle-placeholder">{consumed}g</div>

      <div className="macro-footer">
        <div className="legend-row">
          <div
            className="legeWnd-color"
            style={{ backgroundColor: color }}
          />
          <p>Inname: {consumed}g</p>
        </div>

        <p>Doel: {goal}g</p>

        <Button
          text="Bewerken"
          className="blue"
          onClick={onEdit}
        />
      </div>
    </div>
  );
}

export default MacroCard;
