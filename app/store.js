import $ from 'jquery';
import Backbone from 'backbone';

import Session from './models/session';
import Scorecard from './models/scorecard';
import ScorecardList from './models/scorecard-list';

let session, scorecards;

export default {
  getSession(){
    return (session = session || new Session())
  },
  getScorecards(){
    return (scorecards = scorecards || new ScorecardList())
  }
};
