import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import Login from "./pages/LogIn/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Dagboek from "./pages/Dagboek/Dagboek";
import Recepten from "./pages/Recepten/Recepten";
import ReceptDetails from "./pages/Recepten/ReceptenDetails";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { isAuth } = useContext(AuthContext);
  
  return (
    <div className="app-container">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={isAuth ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuth ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/dagboek"
            element={isAuth ? <Dagboek /> : <Navigate to="/login" />}
          />
          <Route
            path="/recepten"
            element={isAuth ? <Recepten /> : <Navigate to="/login" />}
          />
          <Route
            path="/recepten/:id"
            element={isAuth ? <ReceptDetails /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
