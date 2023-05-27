import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import bodypartImg from '../assets/bodypartImg.png';
import equipmentImg from '../assets/equipmentImg.png';
import targetImg from '../assets/targetImg.png';
import { CardMedia } from '@mui/material';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const memoizedName = useMemo(() => name, [name]);
  const memoizedTarget = useMemo(() => target, [target]);

  const extraDetail = [
    {
      icon: bodypartImg,
      name: bodyPart,
    },
    {
      icon: targetImg,
      name: target,
    },
    {
      icon: equipmentImg,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
      }}
    >
      <img
        src={gifUrl}
        alt={memoizedName}
        loading='lazy'
        className='detail-image'
        style={{
          borderTop: '4px solid #6F61FE',
          marginTop: '60px',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      />
      <Stack sx={{ gap: { lg: '10px', xs: '20px' } }}>
        <Typography
          variant='h5'
          sx={{
            textTransform: 'capitalize',
            fontWeight: 'bold',
            color: 'text.secondary',
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ color: 'text.primary' }}>
          <span style={{ textTransform: 'capitalize' }}>{memoizedName}</span> is
          one of the many exercises to target your {memoizedTarget}.<br /> Just
          follow the picture and enjoy working out!
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button variant='contained' color='secondary'>
              <img src={item.icon} style={{ width: '30px', height: '30px' }} />
            </Button>
            <Typography
              sx={{ textTransform: 'capitalize', color: 'text.primary' }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
