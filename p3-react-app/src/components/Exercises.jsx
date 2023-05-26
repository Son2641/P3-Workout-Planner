import SearchBar from './SearchBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import ExerciseList from './ExerciseList';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <>
      <Box sx={{ mx: 13 }}>
        <Typography
          variant='h5'
          sx={{ my: 2, fontWeight: 'bold', color: 'text.primary' }}
        >
          Search Exercises
        </Typography>
        <SearchBar
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <ExerciseList
          setExercises={setExercises}
          bodyPart={bodyPart}
          exercises={exercises}
        />
      </Box>
    </>
  );
};

export default Exercises;
