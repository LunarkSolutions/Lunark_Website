import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import WatchEatPage from './components/WatchEatPage';
import PrivacyPage from './components/PrivacyPage';
import SettingsPage from './components/SettingsPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WatchEatPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;