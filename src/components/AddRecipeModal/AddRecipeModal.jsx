import React, { useState } from "react";
import axios from "axios";
import "./AddRecipeModal.css";
import Scroller from "../Scroller/Scroller";

function AddRecipeModal({ onClose, onAdd, mealType }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            apiKey: import.meta.env.VITE_API_KEY,
            query,
            type: mealType.toLowerCase(),
            addRecipeInformation: true,
            number: 10,
          },
        }
      );
      setResults(response.data.results);
    } catch (err) {
      setError("Fout bij het zoeken van recepten");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAddRecipe(recipe) {
    try {
      const infoResponse = await axios.get(
        `https://api.spoonacular.com/recipes/${recipe.id}/information`,
        {
          params: {
            apiKey: import.meta.env.VITE_API_KEY,
            includeNutrition: true,
          },
        }
      );

      const nutrients = infoResponse.data.nutrition?.nutrients || [];
      const findNutrient = (name) =>
        nutrients.find((n) => n.name === name)?.amount || 0;

      const newItem = {
        name: recipe.title,
        kcal: findNutrient("Calories"),
        fat: findNutrient("Fat"),
        carbs: findNutrient("Carbohydrates"),
        protein: findNutrient("Protein"),
      };

      onAdd(newItem);
      onClose();
    } catch (err) {
      console.error("Fout bij ophalen recept-info:", err);
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Zoek een recept</h3>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Bijv. Pizza"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? "Laden..." : "Zoeken"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        <Scroller className="results-container">
          {!loading && !error && results.length === 0 ? (
            <p>Geen resultaten gevonden.</p>
          ) : (
            results.map((recipe) => (
              <div key={recipe.id} className="result-item">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <p>{recipe.title}</p>
                <button onClick={() => handleAddRecipe(recipe)}>
                  Voeg toe
                </button>
              </div>
            ))
          )}
        </Scroller>
        <button onClick={onClose} className="close-button">
          Annuleren
        </button>
      </div>
    </div>
  );
}

export default AddRecipeModal;
