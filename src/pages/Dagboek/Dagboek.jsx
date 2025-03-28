import React, { useState } from "react";
import "./Dagboek.css";
import getFormattedDate from "../../helpers/dateHelper";
import MealTabs from "../../components/MealTabs/MealTabs";
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";
import Button from "../../components/Button/Button"; 

function Dagboek() {
  const todayString = getFormattedDate();
  const mealOptions = ["Ontbijt", "Lunch", "Avondeten", "Tussendoor"];
  const [activeMeal, setActiveMeal] = useState("Ontbijt");

  const [daybookItems, setDaybookItems] = useState({
    Ontbijt: [],
    Lunch: [],
    Avondeten: [],
    Tussendoor: [],
  });

  const [showModal, setShowModal] = useState(false);

  const handleTabSelect = (meal) => {
    setActiveMeal(meal);
  };

  const handleAddItem = (newItem) => {
    setDaybookItems((prev) => ({
      ...prev,
      [activeMeal]: [...prev[activeMeal], newItem],
    }));
  };

  const handleRemoveItem = (index) => {
    setDaybookItems((prev) => {
      const updatedItems = [...prev[activeMeal]];
      updatedItems.splice(index, 1);
      return {
        ...prev,
        [activeMeal]: updatedItems,
      };
    });
  };

  return (
    <div className="dagboek-container">
      <div className="dagboek-header">
        <h2 className="dagboek-title">Mijn Dagboek voor {todayString}</h2>
        <MealTabs
          options={mealOptions}
          activeTab={activeMeal}
          onTabSelect={handleTabSelect}
        />
      </div>

      <Button
        text="Voeg toe"
        className="blue"
        onClick={() => setShowModal(true)}
      />

      <div className="dagboek-items-list">
        {daybookItems[activeMeal].map((item, index) => (
          <div key={index} className="dagboek-item">
            <span>
              {item.name} - {item.kcal} Kcal | {item.carbs}g carbs | {item.protein}g eiwitten | {item.fat}g vet
            </span>
            <button onClick={() => handleRemoveItem(index)}>x</button>
          </div>
        ))}
      </div>

      {showModal && (
        <AddRecipeModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddItem}
          mealType={activeMeal}
        />
      )}
    </div>
  );
}

export default Dagboek;
