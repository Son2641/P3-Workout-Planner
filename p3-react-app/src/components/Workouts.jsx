import React from 'react';
import WorkoutProgramForm from './WorkoutProgramForm';

const Workouts = ({ exercises, handleWorkoutProgramChange }) => {
  return (
    <WorkoutProgramForm
      exercises={(exercises = [])}
      onChange={handleWorkoutProgramChange}
    />
  );
};

export default Workouts;
