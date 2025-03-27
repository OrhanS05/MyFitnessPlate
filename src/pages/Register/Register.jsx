import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../LogIn/Login.css"; 

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleRegister(e) {
    e.preventDefault();
    setError(null);

    if (!email.includes("@")) {
      setError("Het e-mailadres moet een '@' bevatten.");
      return;
    }
    if (username.length < 6) {
      setError("De gebruikersnaam moet minimaal 6 tekens bevatten.");
      return;
    }
    if (password.length < 6) {
      setError("Het wachtwoord moet minimaal 6 tekens bevatten.");
      return;
    }

    const userData = {
      username,
      email,
      password,
      role: ["user"],
    };

    console.log("Registreren met de volgende gegevens:", userData);

    try {
      const response = await fetch("https://frontend-educational-backend.herokuapp.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      console.log("API response:", response);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Aanmelden niet gelukt, probeer opnieuw.");
      }

      console.log("Registratie succesvol!");
      navigate("/login");
    } catch (err) {
      console.error("Registratie error:", err);
      setError(err.message);
    }
  }

  return (
    <>
      <div className="login-page-top-links">
        <Link to="/login" className="top-link">Inloggen</Link>
        {" | "}
        <Link to="/register" className="top-link">Registreren</Link>
      </div>

      <div className="login-container">
        <h2 className="login-title">Registreren</h2>
        <form className="login-form" onSubmit={handleRegister}>
          <label htmlFor="username">GEBRUIKERSNAAM</label>
          <input
            type="text"
            id="username"
            placeholder="Voer je gebruikersnaam in"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="email">E-MAILADRES</label>
          <input
            type="email"
            id="email"
            placeholder="Voer je e-mailadres in"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">WACHTWOORD</label>
          <input
            type="password"
            id="password"
            placeholder="Voer een wachtwoord in"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button">REGISTREREN</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </>
  );
}

export default Register;
