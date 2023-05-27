import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchBarForWorkouts from './SearchBarForWorkouts';
import ExerciseListForWorkout from './ExerciseListForWorkout';
import ExerciseFormDialog from './ExerciseFormDialog';
import Button from '@mui/material/Button';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseForm = ({ title, onSubmit, onWorkoutSubmit }) => {
  const [open, setOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exercises, setExercises] = useState([]);

  const handleExerciseSubmit = (exercise) => {
    onSubmit(exercise);
    setOpen(false);
  };

  const handleWorkoutSubmit = () => {
    if (selectedExercise) {
      onWorkoutSubmit(selectedExercise);
    }
  };

  const handleSearch = async (query) => {
    const searchString = String(query).toLowerCase();

    const searchedExercises = await fetchData(
      'https://exercisedb.p.rapidapi.com/exercises',
      exerciseOptions
    );

    const filteredExercises = searchedExercises.filter(
      (exercise) =>
        (exercise.name && exercise.name.toLowerCase().includes(searchString)) ||
        (exercise.target &&
          exercise.target.toLowerCase().includes(searchString)) ||
        (exercise.equipment &&
          exercise.equipment.toLowerCase().includes(searchString)) ||
        (exercise.bodypart &&
          exercise.bodypart.toLowerCase().includes(searchString))
    );

    setExercises(filteredExercises);
  };

  return (
    <Box>
      <Typography variant='h5' component='h2' gutterBottom>
        {title}
      </Typography>
      <SearchBarForWorkouts setExercises={handleSearch} />
      <ExerciseListForWorkout
        exercises={exercises}
        onSelect={setSelectedExercise}
      />
      <Box sx={{ mt: 2 }}>
        <Button variant='contained' onClick={() => setOpen(true)}>
          Add Exercise
        </Button>
      </Box>
      <ExerciseFormDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={(exercise) => handleExerciseSubmit(exercise)}
      />
      <Box sx={{ mt: 2 }}>
        <Button variant='contained' onClick={handleWorkoutSubmit}>
          Submit Workout
        </Button>
      </Box>
    </Box>
  );
};

export default ExerciseForm;
