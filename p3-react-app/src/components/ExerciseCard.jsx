import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`./exercise/${exercise.id}`} style={{ textDecoration: 'none' }}>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading='lazy'
        style={{ borderTop: '4px solid #6F61FE' }}
        width='280px'
        height='280px'
      />
      <Stack direction='row' spacing={1} mt={2}>
        <Button
          variant='contained'
          color='primary'
          sx={{
            borderRadius: '20px',
            textTransform: 'capitalize',
            fontSize: '13px',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          variant='contained'
          color='secondary'
          sx={{
            borderRadius: '20px',
            textTransform: 'capitalize',
            fontSize: '13px',
            backgroundColor: '#F4F3F1',
            color: '#6F61FE',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        mt={2}
        variant='h6'
        color='text.primary'
        fontWeight='bold'
        sx={{ fontSize: '15px' }}
        textTransform='capitalize'
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
