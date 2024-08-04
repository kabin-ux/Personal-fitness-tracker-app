import React, { useRef } from 'react';
import useActivities from '../hook/useActivities';

const Settings = () => {
  const { goals, setGoal } = useActivities();
  const distanceRef = useRef();
  const durationRef = useRef();
  const caloriesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGoals = {
      distance: parseFloat(distanceRef.current.value),
      duration: parseFloat(durationRef.current.value),
      calories: parseFloat(caloriesRef.current.value),
    };
    setGoal(newGoals);
  };

  return (
    <div>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" ref={distanceRef} defaultValue={goals.distance} placeholder="Goal Distance (km)" required />
        <input type="number" ref={durationRef} defaultValue={goals.duration} placeholder="Goal Duration (minutes)" required />
        <input type="number" ref={caloriesRef} defaultValue={goals.calories} placeholder="Goal Calories Burned" required />
        <button type="submit">Set Goals</button>
      </form>
    </div>
  );
};

export default Settings;
