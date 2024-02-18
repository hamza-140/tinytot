import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Lesson from './pages/Lesson';
import Details from './pages/Details';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Your login logic here
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Additional login logic if needed
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLoginSuccess={handleLogin} />
            )
          }
        />
        <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} />
        {isLoggedIn ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/lesson" element={<Lesson />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details" element={<Details />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
        <Route path="/signup" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
