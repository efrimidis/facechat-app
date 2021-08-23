import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import './index.css';

import App from './App';
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
      <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


