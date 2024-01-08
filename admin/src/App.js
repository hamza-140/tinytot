import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Lesson from './pages/Lesson';
function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <SideBar menu={sidebar_menu} />

        <div className="dashboard-body">
          <Routes>
            <Route path="*" element={<div></div>} />
            <Route exact path="/" element={<div></div>} />
            <Route exact path="/progress" element={<Orders />} />
            <Route exact path="/lesson" element={<Lesson />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
