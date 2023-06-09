import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6F61FE',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#F4F3F1',
    },
    text: {
      primary: '#36353A', // Set the primary text color
      secondary: '#6F61FE',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      color: '#36353A', // Set the button text color
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
