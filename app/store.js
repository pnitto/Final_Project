import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Session from './models/session';
import Scorecard from './models/scorecard';
import ScorecardList from './models/scorecard-list';
import CommentList from './models/comment-list';
import Comment from './models/comment';
import User from './models/user';
import SearchScorecards from './models/search-scorecards';

let session = new Session();
let scorecards = new ScorecardList();
let comments = new CommentList();
let searchScorecards = new SearchScorecards();

const Store = _.extend({}, Backbone.Events,{

  initialize(){
    this.listenTo(scorecards,'add change remove', this.trigger.bind(this,'change'));
    this.listenTo(session, 'change', this.trigger.bind(this,'change'));
    this.listenTo(comments,'add change remove', this.trigger.bind(this,'change'));
    this.listenTo(searchScorecards, 'add change remove', this.trigger.bind(this,'change'));
  },

  getSearch(){
    return searchScorecards.toJSON();
  },
  getSearchScorecards(model,search){
    return( new scorecards(model, {search:search}))
  },
  searchScorecards(search){
    scorecards.setSearch(search);
    scorecards.fetch()
  },

  getScorecards(){
    return scorecards.toJSON();
  },
  fetchScorecards(){
    return scorecards.fetch();
  },
  getScorecard(id){
    let scorecard = scorecards.get(id);
    console.log(scorecard);
    if(scorecard){
      console.log('Get scorecard by id')
      return scorecard.toJSON();
    }else{
      console.log('else')
      scorecards.fetch();
      return {};
    }
  },
  saveScorecard(scorecard,options){
    return scorecards.create(scorecard,_.extend({}, options, {merge: true}))
  },
  destroyScorecard(scorecard){
    return scorecards.get(scorecard.objectId).destroy();
  },

  getComments(){
    return comments.toJSON();
  },
  fetchComments(){
    return comments.fetch();
  },

  getComment(id){
    let comment = comments.get(id);
    if(comment){
      return comment.toJSON();
    }else {
      comments.fetch();
      return {};
    }
  },
  saveComment(comment,options){
    return comments.create(comment,options)
  },
  destroyComment(comment){
    return comments.get(comment.objectId).destroy();
  },
  invalidateSession(){
    return session.invalidate();
  },
  authenticateSession(options){
  return session.authenticate(options)
  },
  getSession(){
    return session.toJSON();
  },
  restoreSession(){
    return session.restore();
  },
  createUser(attributes){
      let user = new User(attributes);
      return user.save().then(()=>{
        return session.authenticate({sessionToken: user.get('sessionToken')})
      });
  },
  saveUser(user,options){
    options = _.extend({},options,{merge:true});
    return users.create(user,options)
  }

});

Store.initialize();
export default Store;
