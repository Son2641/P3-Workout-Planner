import { useState } from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import Detail from './Detail';
const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  const memoizedExerciseDetail = useMemo(
    () => exerciseDetail,
    [exerciseDetail]
  );

  return (
    <Box>
      <Detail exerciseDetail={memoizedExerciseDetail} />
    </Box>
  );
};

export default ExerciseDetails;
