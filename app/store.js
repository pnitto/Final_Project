import $ from 'jquery';
import Backbone from 'backbone';

import Session from './models/session';
import Scorecard from './models/scorecard';
import ScorecardList from './models/scorecard-list';
import CommentList from './models/comment-list';

let session, scorecards,comments;

export default {
  getSession(){
    return (session = session || new Session())
  },
  getScorecards(){
    return (scorecards = scorecards || new ScorecardList())
  },
  getComments(){
    return (comments = comments || new CommentList())
  }
};
