import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import WatchEatPage from './components/WatchEatPage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      {/* Animated side lines */}
      <div className="animated-line animated-line-left"></div>
      <div className="animated-line animated-line-right"></div>
      
      {/* Animated purple balls */}
      <div className="animated-ball ball-1"></div>
      <div className="animated-ball ball-2"></div>
      <div className="animated-ball ball-3"></div>
      <div className="animated-ball ball-4"></div>
      <div className="animated-ball ball-5"></div>
      <div className="animated-ball ball-6"></div>
      <div className="animated-ball ball-7"></div>
      <div className="animated-ball ball-8"></div>
      <div className="animated-ball ball-9"></div>
      <div className="animated-ball ball-10"></div>
      <div className="animated-ball ball-11"></div>
      <div className="animated-ball ball-12"></div>
      <div className="animated-ball ball-13"></div>
      <div className="animated-ball ball-14"></div>
      <div className="animated-ball ball-15"></div>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watcheat" element={<WatchEatPage />} />
      </Routes>
    </Router>
  );
}

export default App;