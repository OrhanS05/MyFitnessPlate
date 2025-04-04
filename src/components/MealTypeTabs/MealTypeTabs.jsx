import React from "react";
import Button from "../Button/Button";
import "./MealTypeTabs.css";

function MealTypeTabs({ mealOptions, activeMeal, onMealSelect }) {
  return (
    <div className="mealtype-buttons">
      {mealOptions.map((meal) => (
        <Button
          key={meal}
          text={meal}
          className={`mealtype-button ${activeMeal === meal ? "active" : ""}`}
          onClick={() => onMealSelect(meal)}
        />
      ))}
    </div>
  );
}

export default MealTypeTabs;
