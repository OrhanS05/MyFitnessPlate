import React, { useState } from "react";
import "./AddItemModal.css";

function AddItemModal({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [kcal, setKcal] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      kcal,
    };
    onAdd(newItem);
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Voeg gerecht toe</h3>
        <form onSubmit={handleSubmit}>
          <label>Naam gerecht:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Kcal:</label>
          <input
            type="number"
            value={kcal}
            onChange={(e) => setKcal(e.target.value)}
            required
          />

          <div className="modal-buttons">
            <button type="submit">Toevoegen</button>
            <button type="button" onClick={onClose}>Annuleren</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemModal;
