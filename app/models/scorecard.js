import Backbone from 'backbone';
import _ from 'underscore';
import User from './user'
import store from '../store';
import {Link} from 'react-router';


const Scorecard = Backbone.Model.extend({
  idAttribute: "objectId",
  urlRoot: "https://api.parse.com/1/classes/Scorecards",
  
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
        putts: 0,
      };
    }
  ),
    }
  },

  scoreTotal(){
  var total = this.get('holes').reduce((total,x)=>{
      return total + x.playerscore
    },0)
    return total
  },
  firAverage(){
  var average = this.get('holes').reduce((total,x)=>{
    var result = total + x.fir / this.get('holes').length * 100
    return result;
  },0);
  return average;
  },
  girAverage(){
    var average = this.get('holes').reduce((total,x)=>{
      return total + x.gir / this.get('holes').length * 100
    },0);
  return average
  },
  puttTotal(){
    var total = this.get('holes').reduce((total,x)=>{
      return total + x.putts
    },0);
  return total
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
        girAverage: this.girAverage(),
        firAverage: this.firAverage(),
        puttTotal: this.puttTotal(),
        scoreTotal: this.scoreTotal(),
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
      return new Promise((_, reject)=> reject("Invalid session"));
    }
  }
});
export default Scorecard;

/*
under else of toJSON
  metadata: this.getMetadata(),
scorecard.updateHole(3,{score:2})
updateHole(x, data){
  var newHoles = _.clone(this.get('holes'))
  _.extend(newHoles[x],data)
  this.set('holes', newHoles)
}
*/
