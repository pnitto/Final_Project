import Backbone from 'backbone';
import _ from 'underscore';

const Comment = Backbone.Model.extend({
  idAttribute: "objectId",
  defaults(){
    return {
      creator: {toJSON:function(){}},
      courseName: "",
      comment: "",
      rating: 0,
    }
  },
  toJSON(options){
    if(options){
      return _.extend({},this.attributes,{
        creator:{
          "__type":"Pointer",
          "className":"_User",
          "objectId": this.get('creator').id
        }
      })
    }else{
      return _.extend({}, this.attributes,{
        creator: this.get('creator').toJSON
      });
    }
  }
})

export default Comment;
