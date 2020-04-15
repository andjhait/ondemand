import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';
import history from '../src/assets/js/history';
import MainRoutes from '../src/MainRoutes';
import Grid from '@material-ui/core/Grid';

const routing = (
  <Grid container justify="center">
  <Grid item lg={8}>
    <Router history={history}>
      <MainRoutes />
    </Router>
    </Grid>
  </Grid>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(routing, document.getElementById('root'));