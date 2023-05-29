import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const CreateWorkoutButton = ({ onClick }) => {
  return (
    <>
      <Box display='flex' justifyContent='center' marginTop='20px'>
        <Button
          variant='contained'
          onClick={onClick}
          sx={{
            marginBottom: '10px',
            alignSelf: 'center',
          }}
        >
          Create Workout
        </Button>
      </Box>
    </>
  );
};

export default CreateWorkoutButton;
