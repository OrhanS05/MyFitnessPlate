import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";


function Profile() {
  const { username, logout } = useContext(AuthContext);

  return (
    <div className="profile-container">
      <h1>Profiel</h1>
      <p>Gebruikersnaam: {username}</p>
      <button onClick={logout}>Uitloggen</button>
    </div>
  );
}

export default Profile;
