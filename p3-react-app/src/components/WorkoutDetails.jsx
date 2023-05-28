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
  const handleExerciseEdit = (index) => {
    const exerciseToEdit = exercises[index];
    onExerciseEdit(index, exerciseToEdit);
  };

  return (
    <Box
      sx={{
        border: '2px solid #6F61FE',
        width: '60%',
        padding: '10px',
        borderRadius: '10px',
        boxShadow:
          'box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;',
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        Workout Name: {title}
      </Typography>
      {exercises.map((exercise, index) => (
        <Box key={`exercise-${index}`} sx={{ mt: 2 }}>
          <Typography
            variant='subtitle1'
            component='p'
            padding='20px'
            textTransform='capitalize'
          >
            Exercise: {exercise.selectedExercise || ''}, <br />
            Reps: {exercise.reps}, Sets: {exercise.sets}, Weight:{' '}
            {exercise.weight}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Button
              variant='outlined'
              onClick={() => handleExerciseEdit(index)}
              sx={{ marginRight: '10px' }}
            >
              Edit Exercise
            </Button>
            <Button
              variant='outlined'
              color='error'
              onClick={() => onExerciseDelete(index)}
            >
              Delete Exercise
            </Button>
          </Box>
        </Box>
      ))}
      <Box sx={{ mt: 2 }}>
        <Button variant='outlined' color='error' onClick={() => onDelete()}>
          Delete Workout
        </Button>
      </Box>
    </Box>
  );
};

export default WorkoutDetails;
