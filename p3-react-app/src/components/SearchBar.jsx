import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Search } from '@mui/icons-material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import { useEffect } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, SetExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };
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
          exercise.name.toLowerCase().includes(searchTerm) ||
          exercise.target.toLowerCase().includes(searchTerm) ||
          exercise.equipment.toLowerCase().includes(searchTerm) ||
          exercise.bodypart.toLowerCase().includes(searchTerm)
      );

      setSearchTerm('');
      SetExercises(searchedExercises);
    }
  };

  return (
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
  );
};

export default SearchBar;
