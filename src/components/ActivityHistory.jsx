import React from 'react';
import { Link } from 'react-router-dom';
import useActivities from '../hook/useActivities';

const ActivityHistory = () => {
  const { activities, deleteActivity } = useActivities();

  return (
    <div>
      <h2>Activity History</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.type} - {activity.duration} minutes - {activity.distance} km - {activity.calories} calories
            <button onClick={() => deleteActivity(activity.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityHistory;
