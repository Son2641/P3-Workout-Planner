import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const WorkoutDetails = ({
  title,
  exercises,
  onDelete,
  // onExerciseEdit,
  // onExerciseDelete,
}) => {
  // const handleExerciseEdit = (index) => {
  //   const exerciseToEdit = exercises[index];
  //   onExerciseEdit(index, exerciseToEdit);
  // };

  return (
    <Box
      sx={{
        borderTop: '3px solid #6F61FE',
        // width: '20%',
        // height: '70%',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <Typography variant='h5' component='h2' gutterBottom color='text.primary'>
        {title}
      </Typography>
      {exercises.map((exercise, index) => (
        <Box key={`exercise-${index}`} sx={{ mt: 1 }}>
          <Typography
            variant='subtitle1'
            component='p'
            padding='10px'
            textTransform='capitalize'
            color='text.primary'
          >
            <Typography fontWeight='bold' color='text.primary'>
              {exercise.selectedExercise || ''}
            </Typography>
            Reps: {exercise.reps}, Sets: {exercise.sets}, Weight:{' '}
            {exercise.weight}
          </Typography>
          <Box sx={{ mt: 1 }}></Box>
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
