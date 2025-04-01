import React from "react";
import Button from "../Button/Button";
import "./MacroCard.css";
import CircularProgress from "../CircularProgress/CircularProgress";

function MacroCard({ name, consumed, goal, color, onEdit }) {
  return (
    <div className="macro-card">
      <h3>{name}</h3>
      <CircularProgress
        value={consumed}
        max={goal}
        color={color}
      />

      <div className="macro-footer">
        <p>Inname: {consumed}g</p>
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
