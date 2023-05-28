import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WorkoutTitleDialog from './WorkoutTitleDialog';
import ExerciseForm from './ExerciseForm';
import CreateWorkoutButton from './CreateWorkoutButton';

const CreateWorkout = () => {
  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [exercises, setExercises] = useState([]);

  const handleTitleSubmit = (title) => {
    setTitle(title);
    setOpen(true);
  };

  const handleExerciseSubmit = (exercise) => {
    setExercises([...exercises, exercise]);
  };

  const handleWorkoutSubmit = () => {
    const workout = { title, exercises };
    const newWorkouts = [...workouts, workout];
    setWorkouts(newWorkouts);
    localStorage.setItem('workouts', JSON.stringify(newWorkouts));
    setTitle('');
    setExercises([]);
    setOpen(false);
  };

  const handleWorkoutCancel = () => {
    setTitle('');
    setExercises([]);
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom color='text.primary'>
        Create Workout
      </Typography>
      <CreateWorkoutButton onClick={() => setOpen(true)} />
      <WorkoutTitleDialog
        open={open}
        onClose={handleWorkoutCancel}
        onSubmit={handleTitleSubmit}
      />
      {title && (
        <ExerciseForm
          title={title}
          currentExercises={exercises}
          onSubmit={handleExerciseSubmit}
          onWorkoutSubmit={handleWorkoutSubmit}
        />
      )}
    </Box>
  );
};

export default CreateWorkout;
