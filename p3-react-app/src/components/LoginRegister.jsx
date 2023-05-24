import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const LoginRegister = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.container} maxWidth='xs'>
      <Typography component='h1' variant='h5'>
        Sign In / Sign Up
      </Typography>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        centered
      >
        <Tab label='Sign In' />
        <Tab label='Sign Up' />
      </Tabs>
      <Box hidden={value !== 0}>
        <LoginPage />
      </Box>
      <Box hidden={value !== 1}>
        <RegistrationPage />
      </Box>
    </Container>
  );
};

export default LoginRegister;
