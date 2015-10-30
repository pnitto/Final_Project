import Backbone from 'backbone';
import _ from 'underscore';
import User from './user'
import store from '../store';
import {Link} from 'react-router';


const Scorecard = Backbone.Model.extend({
  idAttribute: "objectId",
  urlRoot:"https://api.parse.com/1/classes/Scorecards",

  defaults(){
    return {
      creator: { toJSON: function() {} },
      name: "",
      holes: Array.apply(null,Array(18)).map((i,index)=>{return {
        holenumber: index + 1,
        partype: 3,
        playerscore: 0,
        fir: false,
        gir: false,
        putts: 0
      };
    }
  )
  }
  },
  parse(response){
    response.creator = new User(_.omit(response.creator,'__type','className'),{parse:true});
    return response
  },
  toJSON(options){
    if(options){
      return _.extend({},this.attributes,{
        creator: {
          "__type":"Pointer",
          "className":"_User",
          "objectId": this.get('creator').id
        }
      })
    }else{
      return _.extend({},this.attributes,{
        creator: this.get('creator').toJSON
      });
    }
  },
  save(){
    let currentUser = store.getSession().currentUser;
    if(currentUser){
      this.set('creator', new User(currentUser));
      Backbone.Model.prototype.save.apply(this, arguments);
    }else{
      return new Promise((_, reject)=> reject("Invalide session"));
    }
  }
});
export default Scorecard;

/*
scorecard.updateHole(3,{score:2})
updateHole(x, data){
  var newHoles = _.clone(this.get('holes'))
  _.extend(newHoles[x],data)
  this.set('holes', newHoles)
}
*/
