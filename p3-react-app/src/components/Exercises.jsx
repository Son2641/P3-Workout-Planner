import { useContext, useMemo } from 'react';
import { ExercisesContext } from '../utils/ExercisesContext';
import SearchBar from './SearchBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExerciseList from './ExerciseList';

const Exercises = () => {
  const { exercises, setExercises, bodyPart, setBodyPart } =
    useContext(ExercisesContext);
  const memoizedBodyPart = useMemo(() => bodyPart, [bodyPart]);
  const memoizedExercises = useMemo(() => exercises, [exercises]);

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
          bodyPart={memoizedBodyPart}
          setBodyPart={setBodyPart}
        />
        <ExerciseList
          setExercises={setExercises}
          bodyPart={memoizedBodyPart}
          exercises={memoizedExercises}
        />
      </Box>
    </>
  );
};

export default Exercises;
