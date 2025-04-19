import React from "react";
import "./Error404.css";

const Error404 = () => {
  return (
    <div className="error404-container">
      <h1>404</h1>
      <p>Oeps! De pagina die je zoekt bestaat niet.</p>
      <a href="/">Ga terug naar de startpagina</a>
    </div>
  );
};

export default Error404;
