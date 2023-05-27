import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CreateWorkoutButton from './CreateWorkoutButton';
import WorkoutTitleDialog from './WorkoutTitleDialog';
import ExerciseForm from './ExerciseForm';
import WorkoutDetails from './WorkoutDetails';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
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
    setWorkouts([...workouts, workout]);
    setTitle('');
    setExercises([]);
    setOpen(false);
  };

  const handleWorkoutDelete = (index) => {
    const newWorkouts = [...workouts];
    newWorkouts.splice(index, 1);
    setWorkouts(newWorkouts);
  };

  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        Workouts
      </Typography>
      <CreateWorkoutButton onClick={() => setOpen(true)} />
      <WorkoutTitleDialog
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleTitleSubmit}
      />
      {workouts.map((workout, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <WorkoutDetails
            title={workout.title}
            exercises={workout.exercises}
            onDelete={() => handleWorkoutDelete(index)}
          />
        </Box>
      ))}
      {title && (
        <ExerciseForm
          title={title}
          exercises={exercises}
          onSubmit={handleExerciseSubmit}
          onWorkoutSubmit={handleWorkoutSubmit}
        />
      )}
    </Box>
  );
};

export default Workouts;
