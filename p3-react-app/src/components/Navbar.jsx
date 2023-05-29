import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import fitnessImg from '../assets/fitnessImg.png';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'inherit', // Set the background color to inherit from the parent
          boxShadow: 'none', // Remove the box shadow
          px: 10,
        }}
      >
        <Toolbar>
          <CardMedia
            component='img'
            alt='hero-img'
            image={fitnessImg}
            sx={{ width: '17px', height: '17px', marginRight: '10px' }}
          />
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              color: 'text.secondary',
              fontWeight: 'bold',
            }}
          >
            Son Fitness
          </Typography>
          <Button
            color='secondary'
            component={RouterLink}
            to='/'
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
              '&:active': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
            }}
          >
            Home
          </Button>
          <Button
            color='secondary'
            component={RouterLink}
            to='/exercises'
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
              '&:active': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
            }}
          >
            Exercises
          </Button>
          <Button
            color='secondary'
            component={RouterLink}
            to='/workouts'
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
              '&:active': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
            }}
          >
            Workouts
          </Button>
          <Button
            color='secondary'
            component={RouterLink}
            to='/about'
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
              '&:active': {
                color: 'text.secondary',
                borderBottom: '3px solid',
              },
              marginRight: 5,
            }}
          >
            About
          </Button>
          <Button
            component={RouterLink}
            to='/login'
            sx={{
              color: 'text.secondary',
              border: '2px solid',
              borderColor: 'text.secondary',
              borderRadius: 0,
              typography: 'body1',
              px: 2,
            }}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
