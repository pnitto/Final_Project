import Backbone from 'backbone';
import _ from 'underscore';
import User from './user';
import Scorecard from './scorecard';
import store from '../store';

const Comment = Backbone.Model.extend({
  idAttribute: "objectId",
  defaults(){
    return {
      creator: {toJSON:function(){}},
      scorecard: {toJSON: function(){}},
      courseName: "",
      comment: "",
      rating: 0,
    }
  },
  parse(response){
    response.creator = new User(_.omit(response.creator,'__type','className'),{parse:true});
    response.scorecard = new Scorecard(_.omit(response.scorecard,'__type','className'),{parse:true})
    return response;
  },
  toJSON(options){
    if(options){
      return _.extend({},this.attributes,{
        creator:{
          "__type":"Pointer",
          "className":"_User",
          "objectId": this.get('creator').id
        },
        scorecard:{
        "__type":"Pointer",
        "className":"Scorecards",
        "objectId": this.get('scorecard').id
      }
      })
    }else{
      return _.extend({}, this.attributes,{
        creator: this.get('creator').toJSON(),
        scorecard: this.get('scorecard').toJSON()
      });
    }
  },
  save(){
    let currentUser = store.getSession().currentUser;
    if(currentUser){
      this.set('creator', new User(currentUser));
      Backbone.Model.prototype.save.apply(this, arguments);
    }else{
      return new Promise((_, reject)=> reject("Invalid session"));
    }
  }
})

export default Comment;
