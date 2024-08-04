import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LogActivity from './components/LogActivity';
import ActivityHistory from './components/ActivityHistory';
import Reports from './components/Reports';
import Settings from './components/Settings';
import { ActivityProvider } from './context/ActivityContext';
// import './App.css';

function App() {
  return (
    <ActivityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/log-activity" element={<LogActivity />} />
          <Route path="/activity-history" element={<ActivityHistory />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ActivityProvider>
  );
}

export default App;
