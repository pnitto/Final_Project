import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';

import App from './components/app';
//import Signup from './components/signup';
import Hello from './components/hello';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';


ReactDOM.render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute path="/home" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Route>
  </Router>
), document.getElementById('application'))
