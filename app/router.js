import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route} from 'react-router';

import App from './components/app';
import Login from './components/login';
import SignUp from './components/signup';
import Home from './components/home';
import CreateScorecard from './components/create-scorecard';
import EditHole from './components/edit-hole';
import ScorecardDetail from './components/scorecard-detail';
import Chat from './components/comment-list';
import Slider from './components/slider';
import store from './store';


function requireAuth(nextState,replaceState){
  if(!store.getSession().isAuthenticated){
    replaceState({nextPathname: nextState.location.pathname},'/login')
  }
}

function requireNotAuth(nextState, replaceState){
  if(store.getSession().isAuthenticated) {
    replaceState({},'/')
  }
}

ReactDOM.render((
  <Router>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="login" component={Login} onEnter={requireNotAuth}/>
      <Route path="signup" component={SignUp} onEnter={requireNotAuth}/>
      <Route path="create-scorecard" component={CreateScorecard} onEnter={requireAuth}/>
      <Route path="scorecards/:scorecardId" component={ScorecardDetail} onEnter={requireAuth}>
        <Route path="hole/:holeIndex" component={EditHole} onEnter={requireAuth}/>
      </Route>
      <Route path="chat" component={Chat} />
      <Route path="slick-carousel" component={Slider} />
    </Route>
  </Router>
), document.getElementById('application'))
