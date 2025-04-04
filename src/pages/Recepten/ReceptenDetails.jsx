import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ReceptDetails.css";

const ReceptDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const result = await axios.get(
          `https://api.spoonacular.com/recipes/${id}/information`,
          {
            params: {
              apiKey: import.meta.env.VITE_API_KEY,
              includeNutrition: true,
            },
          }
        );
        setRecipe(result.data);
      } catch (err) {
        console.error("Error fetching recipe details:", err);
        setError("Fout bij het ophalen van recept details.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (loading) return <p>Laden...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!recipe) return <p>Geen recept gevonden.</p>;

  const nutrientMap = {
    Calories: "Calorieën",
    Fat: "Vet",
    Carbohydrates: "Koolhydraten",
    Protein: "Eiwitten",
  };

  return (
    <div className="recipe-details-container">
      <h1>{recipe.title}</h1>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="recipe-details-image"
        />
      )}

      <h2>Samenvatting</h2>
      <div
        className="recipe-summary"
        dangerouslySetInnerHTML={{ __html: recipe.summary }}
      />

      <h2>Bereidingswijze</h2>
      <div
        className="recipe-instructions"
        dangerouslySetInnerHTML={{
          __html: recipe.instructions || "Geen instructies beschikbaar.",
        }}
      />

      <h2>Macro Inhoud</h2>
      {recipe.nutrition && recipe.nutrition.nutrients ? (
        <ul className="macro-list">
          {recipe.nutrition.nutrients
            .filter((nutrient) =>
              ["Calories", "Fat", "Carbohydrates", "Protein"].includes(
                nutrient.name
              )
            )
            .map((nutrient) => {
              const translatedName =
                nutrientMap[nutrient.name] || nutrient.title;
              return (
                <li key={nutrient.name}>
                  {translatedName}: {nutrient.amount}
                  {nutrient.unit}
                </li>
              );
            })}
        </ul>
      ) : (
        <p>Geen macro informatie beschikbaar.</p>
      )}
    </div>
  );
};

export default ReceptDetails;
