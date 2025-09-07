import React from 'react';
import LandingPage from './LandingPage';
import SuperpowersPage from './SuperpowersPage';
import TechArsenalPage from './TechArsenalPage';
import InternshipsPage from './InternshipsPage';
import ProjectsPage from './ProjectsPage';
import AchievementsPage from './AchievementsPage';
import ContactPage from './ContactPage';

const MainPage = () => {
  return (
    <div>
      <div id="landing">
        <LandingPage />
      </div>
      <div id="superpowers">
        <SuperpowersPage />
      </div>
      <div id="tech-arsenal">
        <TechArsenalPage />
      </div>
      <div id="internships">
        <InternshipsPage />
      </div>
      <div id="projects">
        <ProjectsPage />
      </div>
      <div id="achievements">
        <AchievementsPage />
      </div>
      <div id="contact">
        <ContactPage />
      </div>
    </div>
  );
};

export default MainPage; 