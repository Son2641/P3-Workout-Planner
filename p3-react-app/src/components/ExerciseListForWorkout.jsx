import React, { useEffect, useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const ExerciseListForWorkout = ({ onSelect }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState('');

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, []);

  const handleExerciseChange = (event) => {
    const value = event.target.value;
    setSelectedExercise(value); // Update the selectedExercise state
    onSelect(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id='exercise-select-label'>Select Exercise</InputLabel>
      <Select
        labelId='exercise-select-label'
        id='exercise-select'
        onChange={handleExerciseChange} // Update the event handler
        value={selectedExercise} // Pass the selectedExercise state as the value
      >
        {exercises.map((exercise) => (
          <MenuItem key={exercise.id} value={exercise.name}>
            {exercise.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ExerciseListForWorkout;
