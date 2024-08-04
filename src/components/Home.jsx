import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Fitness Activity Tracker</h1>
      <nav>
        <ul>
          <li><Link to="/log-activity">Log Activity</Link></li>
          <li><Link to="/activity-history">Activity History</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
