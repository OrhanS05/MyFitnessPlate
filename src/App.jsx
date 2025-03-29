import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from "./pages/Home/Home";
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Login from "./pages/LogIn/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Recepten from "./pages/Recepten/Recepten";
import ReceptDetails from "./pages/Recepten/ReceptenDetails";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import Dagboek from "./pages/Dagboek/Dagboek"

function App() {
  return (
    <div className="app-container">
      <Router>
        <AuthContextProvider>
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/recepten" element={<Recepten />} />
              <Route path="/recepten/:id" element={<ReceptDetails />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="dagboek" element={<Dagboek />} />
            </Routes>
          </main>
          <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
