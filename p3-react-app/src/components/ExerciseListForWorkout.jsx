import React, { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const ExerciseListForWorkout = ({ onSelect }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      if (Array.isArray(exercisesData)) {
        // Ensure exercisesData is an array
        setExercises(exercisesData);
      }
    };

    fetchExercisesData();
  }, []);

  const handleExerciseChange = (event, value) => {
    onSelect(value);
  };

  return (
    <Autocomplete
      disablePortal
      id='exercise-select'
      options={exercises}
      getOptionLabel={(exercise) => `${exercise.name} (${exercise.id})`} // Include exercise ID in the label
      onChange={handleExerciseChange} // Update the event handler
      renderInput={(params) => (
        <TextField {...params} label='Select Exercise' />
      )}
    />
  );
};

export default ExerciseListForWorkout;
