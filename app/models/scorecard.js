import Backbone from 'backbone';
import _ from 'underscore';
import User from './user'


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
        fircheckbox: false,
        gircheckbox: false,
        putts_per_hole:0
      };
    }
  )
  }
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
