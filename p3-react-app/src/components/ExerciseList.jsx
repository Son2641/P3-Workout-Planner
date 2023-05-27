import { useEffect } from 'react';
import { useState, useMemo } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const ExerciseList = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 6;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = useMemo(() => {
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    return exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  }, [exercises, currentPage]);

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id='exercises' sx={{ p: '20px' }}>
      <Typography variant='h4' mb='30px'>
        Showing Results:
      </Typography>
      <Stack
        direction='row'
        sx={{ gap: { lg: '80px', xs: '40px' } }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        {exercises.length > 9 && (
          <Pagination
            color='primary'
            shape='rounded'
            page={currentPage}
            onChange={paginate}
            count={Math.ceil(exercises.length / exercisesPerPage)}
          />
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseList;
