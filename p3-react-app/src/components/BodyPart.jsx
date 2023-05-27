import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import gym from '../assets/gym.png';
import { CardMedia } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-Card'
      sx={{
        border: bodyPart === item ? '3px solid #6F61FE' : '',
        backgroundColor: '#FFF',
        borderBottomLeftRadius: '20px',
        width: '170px',
        height: '170px',
        cursor: 'pointer',
        gap: '10px',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.1)', // Add the desired scale value for the hover effect
        },
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }}
    >
      <CardMedia
        component='img'
        alt='gym-img'
        image={gym}
        sx={{ width: '45px', height: '45px' }}
      />
      <Typography
        sx={{
          color: 'text.primary',
          fontSize: '20px',
          textTransform: 'capitalize',
          fontWeight: 'bold',
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default React.memo(BodyPart);
