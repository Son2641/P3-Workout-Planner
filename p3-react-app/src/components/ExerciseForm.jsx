import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SearchBarForWorkouts from './SearchBarForWorkouts';
import ExerciseListForWorkout from './ExerciseListForWorkout';
import ExerciseFormDialog from './ExerciseFormDialog';
import Button from '@mui/material/Button';

const ExerciseForm = ({ title, exercises, onSubmit, onWorkoutSubmit }) => {
  const [open, setOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleExerciseSubmit = (exercise) => {
    onSubmit(exercise);
    setOpen(false);
  };

  // const onWorkoutSubmit = () => {
  //   if (selectedExercise) {
  //     // Submit the workout only if an exercise is selected
  //     // ... perform the submission logic
  //   }
  // };

  return (
    <Box>
      <Typography variant='h5' component='h2' gutterBottom>
        {title}
      </Typography>
      <SearchBarForWorkouts onSearch={setSearchQuery} />
      <ExerciseListForWorkout
        exercises={
          exercises &&
          exercises.filter((exercise) =>
            exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        }
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
        onSubmit={(exercise) => handleExerciseSubmit(exercise.exercise)}
      />
      <Box sx={{ mt: 2 }}>
        <Button variant='contained' onClick={onWorkoutSubmit}>
          Submit Workout
        </Button>
      </Box>
    </Box>
  );
};

export default ExerciseForm;
