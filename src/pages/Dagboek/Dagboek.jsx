import React, { useState, useEffect } from "react";
import "./Dagboek.css";
import getFormattedDate from "../../helpers/dateHelper";
import MealTabs from "../../components/MealTabs/MealTabs";
import AddRecipeModal from "../../components/AddRecipeModal/AddRecipeModal";
import Button from "../../components/Button/Button";

function Dagboek() {
  const todayString = getFormattedDate();
  const mealOptions = ["Ontbijt", "Lunch", "Avondeten", "Tussendoor"];
  const [activeMeal, setActiveMeal] = useState("Ontbijt");

  const defaultDaybookItems = {
    Ontbijt: [],
    Lunch: [],
    Avondeten: [],
    Tussendoor: [],
  };

  const [daybookItems, setDaybookItems] = useState(() => {
    const stored = localStorage.getItem("daybookItems");
    return stored ? JSON.parse(stored) : defaultDaybookItems;
  });

  const [favoriteItems, setFavoriteItems] = useState(() => {
    const storedFavs = localStorage.getItem("favoriteItems");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem("daybookItems", JSON.stringify(daybookItems));
  }, [daybookItems]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

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

  function handleToggleFavorite(item) {
    const isInFavorites = favoriteItems.some((fav) => fav === item);
    if (isInFavorites) {
      setFavoriteItems((prev) => prev.filter((fav) => fav !== item));
    } else {
      setFavoriteItems((prev) => [...prev, item]);
    }
  }

  const daybookList = daybookItems[activeMeal];
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

      <Button text="Voeg toe" className="blue" onClick={() => setShowModal(true)} />

      <div className="dagboek-items-list">
        {daybookList.map((item, index) => {
          const isFav = favoriteItems.includes(item);
          return (
            <div key={index} className="dagboek-item">
              <span>
                {item.name} - {item.kcal} Kcal | {item.carbs}g carbs |{" "}
                {item.protein}g eiwitten | {item.fat}g vet
              </span>
              <div className="dagboek-item-buttons">
                <button onClick={() => handleToggleFavorite(item)}>
                  {isFav ? "♥" : "♡"}
                </button>
                <button onClick={() => handleRemoveItem(index)}>x</button>
              </div>
            </div>
          );
        })}
      </div>

      {showModal && (
        <AddRecipeModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddItem}
          mealType={activeMeal}
        />
      )}

      {favoriteItems.length > 0 && (
        <div className="favorite-section">
          <h3>Favoriete Recepten</h3>
          <div className="favorite-items-list">
            {favoriteItems.map((favItem, i) => (
              <div key={i} className="favorite-item">
                <span>
                  {favItem.name} - {favItem.kcal} Kcal | {favItem.carbs}g carbs |{" "}
                  {favItem.protein}g eiwitten | {favItem.fat}g vet
                </span>
                <div className="favorite-item-buttons">
                  <button onClick={() => handleToggleFavorite(favItem)}>x</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dagboek;
