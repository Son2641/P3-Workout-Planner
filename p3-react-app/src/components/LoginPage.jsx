import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      'Must contain at least one number and one special case character'
    )
    .required('Required'),
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form data', values);
    },
  });

  return (
    <Container className={classes.container} maxWidth='xs'>
      <Typography component='h1' variant='h5' sx={{ mb: 2 }}>
        Sign In
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='username'
              name='username'
              label='Username'
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='password'
              name='password'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color='primary' variant='contained' fullWidth type='submit'>
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginPage;
