import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const WorkoutDetails = ({
  title,
  exercises,
  onDelete,
  onExerciseEdit,
  onExerciseDelete,
}) => {
  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      {exercises.map((exercise, index) => (
        <Box key={`exercise-${index}`} sx={{ mt: 2 }}>
          <Typography variant='subtitle1' component='p'>
            Exercise: {exercise.selectedExercise || ''}, Reps: {exercise.reps},
            Sets: {exercise.sets}, Weight: {exercise.weight}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button variant='outlined' onClick={() => onExerciseEdit(index)}>
              Edit
            </Button>
            <Button
              variant='outlined'
              color='error'
              onClick={() => onExerciseDelete(index)}
            >
              Delete
            </Button>
          </Box>
        </Box>
      ))}
      <Box sx={{ mt: 2 }}>
        <Button variant='outlined' color='error' onClick={onDelete}>
          Delete Workout
        </Button>
      </Box>
    </Box>
  );
};

export default WorkoutDetails;
