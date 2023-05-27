import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Search } from '@mui/icons-material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { useEffect } from 'react';
import HorizontalScrollbar from './HorizontalScrollbar';
import { useMemo } from 'react';

const SearchBar = ({ setExercises, bodyPart, setBodyPart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
    console.log('test');
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (searchTerm) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name?.toLowerCase().includes(searchTerm) ||
          exercise.target?.toLowerCase().includes(searchTerm) ||
          exercise.equipment?.toLowerCase().includes(searchTerm) ||
          exercise.bodypart?.toLowerCase().includes(searchTerm)
      );

      setSearchTerm('');
      setExercises(searchedExercises);
      console.log('test1');
    }
  };

  const memoizedBodyParts = useMemo(() => bodyParts, [bodyParts]);

  return (
    <>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40%',
        }}
      >
        <TextField
          label='Search'
          variant='outlined'
          value={searchTerm}
          onChange={handleChange}
          sx={{
            flexGrow: 1,
            mr: 1,
            '& .MuiInputBase-input': {
              height: '17px', // Adjusted height to 32px
            },
          }}
          InputProps={{
            endAdornment: (
              <IconButton
                type='submit'
                color='primary'
                aria-label='search'
                onClick={handleSubmit}
              >
                <Search />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={memoizedBodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </>
  );
};

export default SearchBar;
