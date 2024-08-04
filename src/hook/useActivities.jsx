import { useContext } from 'react';
import { ActivityContext } from '../context/ActivityContext';

const useActivities = () => {
  return useContext(ActivityContext);
};

export default useActivities;
