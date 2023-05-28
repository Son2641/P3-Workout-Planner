import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutPage = () => {
  return (
    <>
      <Box
        sx={{
          margin: 'auto',
          width: '50%',
          marginTop: '30px',
          border: '3px solid #6F61FE',
          borderBottomLeftRadius: '40px',
          padding: '15px',
        }}
      >
        <Typography variant='h4' color='text.secondary' fontWeight='bold'>
          Son Fitness
        </Typography>
        <Typography variant='h6'>
          Welcome to the Son Fitness App, your digital exercise and workout
          guide for beginners. Easily search for exercises by name or body part
          category and follow along with instructional GIFs. Create your own
          workout program and elevate your physical health. Join us today and
          transform your fitness journey with the Son Fitness App.
        </Typography>
      </Box>
      <Box
        sx={{
          margin: 'auto',
          width: '50%',
          marginTop: '20px',
          border: '3px solid #6F61FE',
          borderBottomLeftRadius: '50px',
          padding: '10px',
        }}
      >
        <Typography variant='h4' color='text.secondary' fontWeight='bold'>
          How to Use the App
        </Typography>
        <Typography variant='h6'>
          <ul>
            <li>Search for Exercises you would like to do.</li>
            <li>Search by exercise name or by bodypart.</li>
            <li>Click on the exercise for more details.</li>
            <li>
              In the workouts, just click the create workout button and add your
              desired exercises.
            </li>
            <li>Enjoy your workouts.</li>
          </ul>
        </Typography>
      </Box>
    </>
  );
};

export default AboutPage;
