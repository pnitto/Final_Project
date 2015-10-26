import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';

import App from './components/app';
//import Signup from './components/signup';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';
import CreateScorecard from './components/create-scorecard';
import AddHole from './components/create-hole';


ReactDOM.render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/create-scorecard" component={CreateScorecard} />
      <Route path="/create-hole" component={AddHole} />
    </Route>
  </Router>
), document.getElementById('application'))
