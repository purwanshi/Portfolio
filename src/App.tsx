import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainPage from './pages/MainPage';
import LandingPage from './pages/LandingPage';
import SuperpowersPage from './pages/SuperpowersPage';
import TechArsenalPage from './pages/TechArsenalPage';
import InternshipsPage from './pages/InternshipsPage';
import ProjectsPage from './pages/ProjectsPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen" style={{ background: '#222831' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/superpowers" element={<SuperpowersPage />} />
          <Route path="/tech-arsenal" element={<TechArsenalPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;