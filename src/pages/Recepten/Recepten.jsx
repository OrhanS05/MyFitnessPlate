import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import MealTypeTabs from "../../components/MealTypeTabs/MealTypeTabs";
import getFormattedDate from "../../helpers/dateHelper";
import "./Recepten.css";
import veganIcon from "../../assets/recepten/vegan.png";
import clockIcon from "../../assets/recepten/clock.png";

const mealTypeMap = {
  Ontbijt: "breakfast",
  Lunch: "lunch",
  Avond: "main course",
  Tussendoor: "snack",
};

const Recepten = () => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("Ontbijt");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [minCalories, setMinCalories] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [minProtein, setMinProtein] = useState("");
  const [maxProtein, setMaxProtein] = useState("");
  const [minFat, setMinFat] = useState("");
  const [maxFat, setMaxFat] = useState("");
  const [minCarbs, setMinCarbs] = useState("");
  const [maxCarbs, setMaxCarbs] = useState("");

  const todayString = getFormattedDate();

  const searchRecipes = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    try {
      const spoonacularType = mealTypeMap[mealType] || "";
      const result = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: import.meta.env.VITE_API_KEY,
            query: query,
            type: spoonacularType,
            addRecipeInformation: true,
          },
        }
      );
      if (result.data.results && result.data.results.length > 0) {
        setRecipes(result.data.results);
      } else {
        setError("Geen resultaten gevonden.");
        setRecipes([]);
      }
    } catch (err) {
      setError("Er is een fout opgetreden tijdens het ophalen van de data.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const searchByNutrients = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await axios.get(
        "https://api.spoonacular.com/recipes/findByNutrients",
        {
          params: {
            apiKey: import.meta.env.VITE_API_KEY,
            minCalories: minCalories,
            maxCalories: maxCalories,
            minProtein: minProtein,
            maxProtein: maxProtein,
            minFat: minFat,
            maxFat: maxFat,
            minCarbs: minCarbs,
            maxCarbs: maxCarbs,
            number: 10,
          },
        }
      );
      if (result.data && result.data.length > 0) {
        setRecipes(result.data);
      } else {
        setError("Geen resultaten gevonden.");
        setRecipes([]);
      }
    } catch (err) {
      setError("Er is een fout opgetreden tijdens het ophalen van de data.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
  };

  const handleNutrientSubmit = (e) => {
    e.preventDefault();
    searchByNutrients();
  };

  return (
    <div className="page-container">
      <h1 className="recepten-title">Mijn recepten voor {todayString}</h1>

      <MealTypeTabs
        mealOptions={["Ontbijt", "Lunch", "Avond", "Tussendoor"]}
        activeMeal={mealType}
        onMealSelect={setMealType}
      />

      <div className="recepten-content">
        <div className="left-column">
          <form className="search-bar" onSubmit={handleSubmit}>
            <input
              type="text"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek naar een recept..."
            />
            <Button text="Zoek" className="mealtype-button" type="submit" />
          </form>
          {loading && <p>Laden...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="recipes-list">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                {recipe.readyInMinutes && (
                  <div className="clock-info">
                    <img
                      src={clockIcon}
                      alt="Bereidingstijd"
                      className="clock-icon"
                    />
                    <span className="clock-text">{recipe.readyInMinutes} min</span>
                  </div>
                )}
                <h2>{recipe.title}</h2>
                {recipe.vegan && (
                  <img
                    src={veganIcon}
                    alt="Vegan"
                    className="vegan-icon"
                    title="Vegan recept"
                  />
                )}
                {recipe.image && (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    style={{ width: "200px" }}
                  />
                )}
                <div className="recipe-card-button">
                  <Link to={`/recepten/${recipe.id}`}>
                    <Button text="View Recipe" className="mealtype-button" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-column">
          <div className="top-row">
            <div className="nutrient-search-container">
              <div className="nutrient-search-section">
                <h2 className="nutrients-title">Zoek op Nutriënten</h2>
                <form onSubmit={handleNutrientSubmit} className="nutrient-form">
                  <div className="nutrient-group">
                    <label>Calorieën (min - max):</label>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minCalories}
                      onChange={(e) => setMinCalories(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxCalories}
                      onChange={(e) => setMaxCalories(e.target.value)}
                    />
                  </div>
                  <div className="nutrient-group">
                    <label>Eiwitten (min - max):</label>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minProtein}
                      onChange={(e) => setMinProtein(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxProtein}
                      onChange={(e) => setMaxProtein(e.target.value)}
                    />
                  </div>
                  <div className="nutrient-group">
                    <label>Vet (min - max):</label>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minFat}
                      onChange={(e) => setMinFat(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxFat}
                      onChange={(e) => setMaxFat(e.target.value)}
                    />
                  </div>
                  <div className="nutrient-group">
                    <label>Koolhydraten (min - max):</label>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minCarbs}
                      onChange={(e) => setMinCarbs(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxCarbs}
                      onChange={(e) => setMaxCarbs(e.target.value)}
                    />
                  </div>
                  <Button text="Zoek op Nutriënten" className="blue" type="submit" />
                </form>
              </div>
            </div>
            <div className="recipes-sidebar">
              <h3>Hoe werkt het?</h3>
              <p>
                Je kunt hier een recept selecteren of zoeken. Op basis van de gekozen
                maaltijdtype filter je de resultaten. Daarnaast kun je recepten zoeken op
                basis van nutriënten. Vul de gewenste limieten in en klik op "Zoek op Nutriënten".
                Daarnaast laat de applicatie eenvoudig bij elk gerecht de bereidingstijd linksbovenin
                en of het vegan is.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepten;
