import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';
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
