import SearchBar from './SearchBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';

const Exercises = () => {
  return (
    <>
      <Box sx={{ mx: 13 }}>
        <Typography variant='h5' sx={{ my: 2, fontWeight: 'bold' }}>
          Search Exercises
        </Typography>
        <SearchBar />
      </Box>
    </>
  );
};

export default Exercises;
