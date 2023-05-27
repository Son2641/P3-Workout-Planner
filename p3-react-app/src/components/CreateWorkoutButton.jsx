import React from 'react';
import Button from '@mui/material/Button';

const CreateWorkoutButton = ({ onClick }) => {
  return (
    <Button variant='contained' onClick={onClick}>
      Create Workout
    </Button>
  );
};

export default CreateWorkoutButton;
