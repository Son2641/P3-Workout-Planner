import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseList = ({ exercises, setExercises, bodyPart }) => {
  console.log(exercises);
  return (
    <Box id='exercises' sx={{ p: '20px' }}>
      <Typography variant='h4' mb='30px'>
        Showing Results
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '80px', xs: '40px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseList;
