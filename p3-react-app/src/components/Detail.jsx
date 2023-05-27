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

  return (
    <Stack
      gap='60px'
      sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}
    >
      <img
        src={gifUrl}
        alt={memoizedName}
        loading='lazy'
        className='detail-image'
      />
      <Stack sx={{ gap: { lg: '35px', lg: '20px' } }}>
        <Typography
          variant='h5'
          sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
        >
          {name}
        </Typography>
        <Typography>
          <span style={{ textTransform: 'capitalize' }}>{memoizedName}</span> is
          one of the many exercises to target your {memoizedTarget}.<br /> Just
          follow the picture and enjoy working out!
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
