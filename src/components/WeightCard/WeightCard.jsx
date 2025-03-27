import React from "react";
import Button from "../Button/Button";
import "./WeightCard.css";

const WeightCard = ({ currentWeight, goalWeight, onEdit }) => {
  return (
    <div className="weight-card">
      <h3>Gewicht</h3>
      <div className="weight-info">
        <p>Huidig gewicht: {currentWeight} kg</p>
        <p>Streefgewicht: {goalWeight} kg</p>
      </div>
      <Button text="Bewerken" className="blue" onClick={onEdit} />
    </div>
  );
};

export default WeightCard;
