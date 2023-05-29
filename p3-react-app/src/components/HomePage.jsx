import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import heroImg from '../assets/heroImg.png';
import Grid from '@mui/material/Grid';

const HomePage = () => {
  return (
    <Grid container spacing={2} justifyContent='center' alignItems='center'>
      <Grid item xs={12} sm={6} lg={5} order={{ xs: 2, sm: 1 }}>
        <Box
          sx={{
            p: 2,
          }}
        >
          <Typography color='text.primary' variant='h3' sx={{ my: 7 }}>
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
              sx={{ width: '100%' }}
            >
              Get Started
            </Button>
            <Button
              component={RouterLink}
              to='/exercises'
              variant='contained'
              color='secondary'
              sx={{
                width: '100%',
                backgroundColor: '#F4F3F1',
                color: '#6F61FE',
              }}
            >
              View Exercises
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} lg={5} order={{ xs: 1, sm: 2 }}>
        <CardMedia
          component='img'
          alt='hero-img'
          image={heroImg}
          sx={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
