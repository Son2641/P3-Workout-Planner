import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutPage = () => {
  return (
    <Grid container justifyContent='center' marginTop={2}>
      <Grid item xs={12} md={10} lg={8} sx={{ marginBottom: '50px' }}>
        <Box
          sx={{
            border: '3px solid #6F61FE',
            borderBottomLeftRadius: '40px',
            padding: '15px',
            height: '100%',
          }}
        >
          <Typography variant='h4' color='text.secondary' fontWeight='bold'>
            Son Fitness
          </Typography>
          <Typography variant='h6' color='text.primary'>
            Welcome to the Son Fitness App, your digital exercise and workout
            guide for beginners. Easily search for exercises by name or body
            part category and follow along with instructional GIFs. Create your
            own workout program and elevate your physical health. Join us today
            and transform your fitness journey with the Son Fitness App.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={10} lg={8}>
        <Box
          sx={{
            border: '3px solid #6F61FE',
            borderBottomLeftRadius: '50px',
            padding: '10px',
            height: '100%',
          }}
        >
          <Typography variant='h4' color='text.secondary' fontWeight='bold'>
            How to Use the App
          </Typography>
          <Typography variant='h6' color='text.primary'>
            <ul>
              <li>Search for Exercises you would like to do.</li>
              <li>Search by exercise name or by body part.</li>
              <li>Click on the exercise for more details.</li>
              <li>
                In the workouts, just click the create workout button and add
                your desired exercises.
              </li>
              <li>Enjoy your workouts.</li>
            </ul>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
