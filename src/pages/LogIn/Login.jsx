import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const loginData = {
      username: usernameInput,
      password,
    };

    try {
      const response = await fetch(
        "https://frontend-educational-backend.herokuapp.com/api/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Inloggen mislukt, controleer je gegevens.");
      }

      const data = await response.json();
      console.log("Login response:", data);
      
 
      const token = data.accessToken;
      const name = data.username;


      login(token, name);

   
      navigate("/dashboard");

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="login-page-top-links">
        <Link to="/login" className="top-link">
          Inloggen
        </Link>
        {" | "}
        <Link to="/register" className="top-link">
          Registreren
        </Link>
      </div>

      <div className="login-container">
        <h2 className="login-title">Log in</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="username">GEBRUIKERSNAAM</label>
          <input
            type="text"
            id="username"
            placeholder="Voer je gebruikersnaam in"
            className="login-input"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            required
          />

          <label htmlFor="password">WACHTWOORD</label>
          <input
            type="password"
            id="password"
            placeholder="Voer je wachtwoord in"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Laden..." : "LOGIN"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>

        <div className="login-divider">
          <span>Or</span>
        </div>

        <p className="forgot-password">Wachtwoord vergeten?</p>

        <div className="social-buttons">
          <button className="social-button google-btn">
            Sign in with Google
          </button>
          <button className="social-button facebook-btn">
            Sign in with Facebook
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
