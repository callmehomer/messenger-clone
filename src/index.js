import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import LoginComponent from './Login/login'
import SignupComponent from './Signup/signup'
import DashboardComponent from './Dashboard/dashboard'

const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
// apki key from firebase
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(
	<React.StrictMode>
		{routing}
	</React.StrictMode>,
	document.getElementById('messenger-clone')
);

serviceWorker.unregister();
