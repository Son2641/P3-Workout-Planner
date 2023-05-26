import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const validationSchema = Yup.object({
  username: Yup.string().min(3, 'Minimum 3 characters').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Minimum 8 characters')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/,
      'Must contain at least one number and one special case character'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const RegistrationPage = () => {
  const classes = useStyles();
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSnackbarOpen(true);
    },
  });

  return (
    <Container className={classes.container} maxWidth='xs'>
      <Typography
        component='h1'
        variant='h5'
        sx={{ mb: 2, fontWeight: 'bold' }}
      >
        Sign Up to Son Fitness
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
              onBlur={formik.handleBlur}
              error={
                (formik.touched.username && Boolean(formik.errors.username)) ||
                (!formik.values.username && formik.touched.username)
              }
              helperText={
                (formik.touched.username && formik.errors.username) ||
                (!formik.values.username &&
                  formik.touched.username &&
                  'Username is required')
              }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id='email'
              name='email'
              label='Email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                (formik.touched.email && Boolean(formik.errors.email)) ||
                (!formik.values.email && formik.touched.email)
              }
              helperText={
                (formik.touched.email && formik.errors.email) ||
                (!formik.values.email &&
                  formik.touched.email &&
                  'Email is required')
              }
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
              onBlur={formik.handleBlur}
              error={
                (formik.touched.password && Boolean(formik.errors.password)) ||
                (!formik.values.password && formik.touched.password)
              }
              helperText={
                (formik.touched.password && formik.errors.password) ||
                (!formik.values.password &&
                  formik.touched.password &&
                  'Password is required')
              }
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
            <TextField
              fullWidth
              id='confirmPassword'
              name='confirmPassword'
              label='Confirm Password'
              type={showConfirmPassword ? 'text' : 'password'}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                (formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)) ||
                (!formik.values.confirmPassword &&
                  formik.touched.confirmPassword)
              }
              helperText={
                (formik.touched.confirmPassword &&
                  formik.errors.confirmPassword) ||
                (!formik.values.confirmPassword &&
                  formik.touched.confirmPassword &&
                  'Confirm Password is required')
              }
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color='primary' variant='contained' fullWidth type='submit'>
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MuiAlert onClose={handleCloseSnackbar} severity='success'>
          Registration successful!
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default RegistrationPage;
