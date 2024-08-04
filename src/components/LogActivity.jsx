import React, { useRef } from 'react';
import useActivities from '../hook/useActivities';

const LogActivity = () => {
  const { logActivity } = useActivities();
  const typeRef = useRef();
  const durationRef = useRef();
  const distanceRef = useRef();
  const caloriesRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      id: Date.now(),
      type: typeRef.current.value,
      duration: parseFloat(durationRef.current.value),
      distance: parseFloat(distanceRef.current.value),
      calories: parseFloat(caloriesRef.current.value),
    };
    logActivity(newActivity);
  };

  return (
    <div>
      <h2>Log Activity</h2>
      <form onSubmit={handleSubmit}>
        <select ref={typeRef} required>
          <option value="Running">Running</option>
          <option value="Cycling">Cycling</option>
          <option value="Weightlifting">Weightlifting</option>
        </select>
        <input type="number" ref={durationRef} placeholder="Duration (minutes)" required />
        <input type="number" ref={distanceRef} placeholder="Distance (km)" />
        <input type="number" ref={caloriesRef} placeholder="Calories Burned" />
        <button type="submit">Log Activity</button>
      </form>
    </div>
  );
};

export default LogActivity;
