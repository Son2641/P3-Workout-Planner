import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const WorkoutDetails = ({ title, exercises }) => {
  return (
    <Box>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      {exercises.map((exercise, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant='h6' component='h2' gutterBottom>
            {exercise.name}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Reps: {exercise.reps}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Sets: {exercise.sets}
          </Typography>
          <Typography variant='body1' gutterBottom>
            Weight: {exercise.weight}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default WorkoutDetails;
