import React, { useState } from "react";
import "./Dagboek.css";
import getFormattedDate from "../../helpers/dateHelper"; 
import MealTabs from "../../components/MealTabs/MealTabs";

function Dagboek() {
  const todayString = getFormattedDate();
  const mealOptions = ["Ontbijt", "Lunch", "Avondeten", "Tussendoor"];
  const [activeMeal, setActiveMeal] = useState("Ontbijt");

  const handleTabSelect = (selectedMeal) => {
    setActiveMeal(selectedMeal);
  };

  return (
<div className="dagboek-container">
  <div className="dagboek-header">
    <h2 className="dagboek-title">Mijn Dagboek voor {todayString}</h2>
    <MealTabs options={mealOptions} activeTab={activeMeal} onTabSelect={handleTabSelect} />
  </div>
</div>
  );
}

export default Dagboek;
