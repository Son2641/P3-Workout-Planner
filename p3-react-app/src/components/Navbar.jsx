import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            App Name
          </Typography>
          <Button color='secondary' component={RouterLink} to='/'>
            Home
          </Button>
          <Button color='secondary' component={RouterLink} to='/exercises'>
            Exercises
          </Button>
          <Button color='secondary' component={RouterLink} to='/about'>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
