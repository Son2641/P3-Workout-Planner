import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const WorkoutDetails = ({ title, exercises, onDelete }) => {
  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      {exercises.map((exercise, index) => (
        <Typography key={`exercise-${index}`} variant='subtitle1' component='p'>
          Exercise: {exercise.selectedExercise}, Reps: {exercise.reps}, Sets:{' '}
          {exercise.sets}, Weight: {exercise.weight}
        </Typography>
      ))}
      <Button onClick={onDelete}>Delete Workout</Button>
    </Box>
  );
};

export default WorkoutDetails;
