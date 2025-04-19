import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";

function Profile() {
  const { username, userToken, logout } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://frontend-educational-backend.herokuapp.com/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          password: newPassword,
          repeatedPassword: newPassword,
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Wachtwoord wijziging mislukt");
      }
      await response.json();
      setMessage("Wachtwoord succesvol gewijzigd.");
      setIsEditing(false);
      setNewPassword("");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="profile-container">
      <h1>Profiel</h1>
      <div className="profile-field">
        <label>Gebruikersnaam:</label>
        <span className="field-value">{username}</span>
      </div>
      <div className="profile-field">
        <label>Wachtwoord:</label>
        {!isEditing ? (
          <div className="password-display">
            <span className="field-value">********</span>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Wijzig wachtwoord
            </button>
          </div>
        ) : (
          <form onSubmit={handlePasswordChange} className="password-form">
            <input
              type="password"
              placeholder="Nieuw wachtwoord"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="password-input"
            />
            <div className="password-actions">
              <button type="submit" className="save-button">
                Opslaan
              </button>
              <button type="button" className="cancel-button" onClick={() => setIsEditing(false)}>
                Annuleren
              </button>
            </div>
          </form>
        )}
      </div>

      {message && <p className="profile-message">{message}</p>}

      <button className="logout-button" onClick={logout}>
        Uitloggen
      </button>
    </div>
  );
}

export default Profile;
