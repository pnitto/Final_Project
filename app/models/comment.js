import Backbone from 'backbone';

const Comment = Backbone.Model.extend({
  idAttriute: 'objectId',
  defaults(){
    return {
      creator: {toJSON:function(){}},
      courseName: "",
      comment: "",
      rating:"",
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
