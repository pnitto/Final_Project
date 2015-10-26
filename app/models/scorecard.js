import Backbone from 'backbone';
import _ from 'underscore';

const Scorecard = Backbone.Model.extend({
  idAttribute: "objectId",
  defaults(){
    return {
      name: "",
      holes: Array.apply(null,Array(18)).map(()=>{return {
        holenumber:"",
        partype: "",
        playerscore: "",
        fircheckbox: false,
        gircheckbox: false,
        putts_per_hole:""
      };
    }
  )
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
