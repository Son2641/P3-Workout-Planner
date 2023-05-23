import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              color: 'text.secondary',
            }}
          >
            App Name
          </Typography>
          <Button
            color='secondary'
            component={RouterLink}
            to='/'
            sx={{
              color: 'text.primary',
              '&:hover': {
                color: 'text.secondary',
              },
              '&:active': {
                color: 'text.secondary',
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
              },
              '&:active': {
                color: 'text.secondary',
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
              },
              '&:active': {
                color: 'text.secondary',
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
              },
              '&:active': {
                color: 'text.secondary',
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
              border: '3px solid',
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
