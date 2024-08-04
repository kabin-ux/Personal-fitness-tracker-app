import React, { createContext, useState, useCallback, useMemo } from 'react';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [goals, setGoals] = useState({
    distance: 0,
    duration: 0,
    calories: 0,
  });

  const logActivity = useCallback((activity) => {
    setActivities((prev) => [...prev, activity]);
  }, []);

  const editActivity = useCallback((id, updatedActivity) => {
    setActivities((prev) => prev.map(act => act.id === id ? updatedActivity : act));
  }, []);

  const deleteActivity = useCallback((id) => {
    setActivities((prev) => prev.filter(act => act.id !== id));
  }, []);

  const setGoal = useCallback((goal) => {
    setGoals(goal);
  }, []);

  const contextValue = useMemo(() => ({
    activities, logActivity, editActivity, deleteActivity, goals, setGoal,
  }), [activities, logActivity, editActivity, deleteActivity, goals, setGoal]);

  return (
    <ActivityContext.Provider value={contextValue}>
      {children}
    </ActivityContext.Provider>
  );
};
