import React, { useMemo } from 'react';
import useActivities from '../hook/useActivities';

const Reports = () => {
  const { activities, goals } = useActivities();

  const totalDuration = useMemo(
    () => activities.reduce((sum, act) => sum + act.duration, 0),
    [activities]
  );

  const totalDistance = useMemo(
    () => activities.reduce((sum, act) => sum + act.distance, 0),
    [activities]
  );

  const totalCalories = useMemo(
    () => activities.reduce((sum, act) => sum + act.calories, 0),
    [activities]
  );

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Duration: {totalDuration} minutes (Goal: {goals.duration} minutes)</p>
      <p>Total Distance: {totalDistance} km (Goal: {goals.distance} km)</p>
      <p>Total Calories: {totalCalories} calories (Goal: {goals.calories} calories)</p>
    </div>
  );
};

export default Reports;
