import Backbone from 'backbone';
import _ from 'underscore';
import User from './user';
import Scorecard from './scorecard';
import store from '../store';

//having trouble adding a comment getting and invalid type pointer error when adding a comment

const Comment = Backbone.Model.extend({
  idAttribute: "objectId",
  urlRoot: "https://api.parse.com/1/classes/Comments",

  url: function(){
    return Backbone.Model.prototype.url.apply(this, arguments) + "?include=creator";
  },

  defaults(){
    return {
      creator: {toJSON: function(){}},
      courseName: "",
      comment: "",
      rating: 0,
      time: Date.now()
    }
  },

  toJSON(options){
    if(options){
      return _.extend({},this.attributes,{
        creator: {
          "__type":"Pointer",
          "className":"_User",
          "objectId": this.get('creator').objectId
        },
      })
    }else{
      return _.clone(this.attributes)
      }
  },
  save(){
    let currentUser = store.getSession().currentUser;
    if(currentUser){
      if(this.isNew())
      this.set('creator', currentUser);
      return Backbone.Model.prototype.save.apply(this, arguments);
    }else{
      return new Promise((_, reject)=> reject("Invalid session"));
    }
  }
})

export default Comment;
