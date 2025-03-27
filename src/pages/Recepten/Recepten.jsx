import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Recepten.css";

const Recepten = () => {
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
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

  const todayString = new Date().toLocaleDateString("nl-NL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const searchRecipes = async () => {
    if (!query) return;
    setLoading(true);
    setError("");

    try {
      const result = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: import.meta.env.VITE_API_KEY,
            query: query,
            type: mealType,
            addRecipeInformation: true,
          },
        }
      );
      console.log("Search request:", result.data);
      if (result.data.results) {
        setRecipes(result.data.results);
      } else {
        setError("Geen resultaten gevonden.");
      }
    } catch (err) {
      setError("Er is een fout opgetreden tijdens het ophalen van de data.");
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
      console.log("Nutrient search response:", result.data);
      if (result.data && result.data.length > 0) {
        setRecipes(result.data);
      } else {
        setError("Geen resultaten gevonden.");
      }
    } catch (err) {
      setError("Er is een fout opgetreden tijdens het ophalen van de data.");
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

      <div className="mealtype-buttons">
        <Button
          text="Ontbijt"
          className={`mealtype-button ${mealType === "breakfast" ? "active" : ""}`}
          onClick={() => setMealType("breakfast")}
        />
        <Button
          text="Lunch"
          className={`mealtype-button ${mealType === "lunch" ? "active" : ""}`}
          onClick={() => setMealType("lunch")}
        />
        <Button
          text="Avond"
          className={`mealtype-button ${mealType === "main course" ? "active" : ""}`}
          onClick={() => setMealType("main course")}
        />
        <Button
          text="Tussendoor"
          className={`mealtype-button ${mealType === "snack" ? "active" : ""}`}
          onClick={() => setMealType("snack")}
        />
      </div>


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

      {loading && <p>Laden...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="recipes-layout">
        <div className="recipes-list">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h2>{recipe.title}</h2>
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

        <div className="recipes-sidebar">
          <h3>Hoe werkt het?</h3>
          <p>
            Je kunt hier een recept selecteren of zoeken. Op basis van de gekozen
            maaltijdtype filter je de resultaten. Daarnaast kun je recepten zoeken op
            basis van nutriënten. Vul de gewenste limieten in en klik op "Zoek op Nutriënten".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recepten;
