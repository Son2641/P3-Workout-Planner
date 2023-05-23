import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { Card } from '@mui/material';
import { CardMedia } from '@mui/material';
import heroImg from '../assets/heroImg.png';

const HomePage = () => {
  return (
    <Box sx={{ px: 10, display: 'flex', gap: 18 }}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', width: 1 / 2, p: 2 }}
      >
        <Typography color='text.primary' variant='h2' sx={{ my: 7 }}>
          Be healthy and be active with the perfect exercises 💪
        </Typography>
        <Typography variant='h6' sx={{ color: '#64645D', marginBottom: 5 }}>
          Don't know where to start when working out? Say no more
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            component={RouterLink}
            to='/login'
            variant='contained'
            color='primary'
            sx={{ width: 1 / 4 }}
          >
            Get Started
          </Button>
          <Button
            component={RouterLink}
            to='/exercises'
            variant='contained'
            color='secondary'
            sx={{ width: 1 / 4, backgroundColor: '#F4F3F1', color: '#6F61FE' }}
          >
            View Exercises
          </Button>
        </Box>
      </Box>
      <CardMedia
        component='img'
        alt='hero-img'
        image={heroImg}
        sx={{ width: '550px', height: '570px' }}
      />
    </Box>
  );
};

export default HomePage;
