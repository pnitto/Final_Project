import Backbone from 'backbone';
import Comment from '../models/comment';

const CommentList = Backbone.Collection.extend({
  model: Comment,
  url: "https://api.parse.com/1/classes/Comments?include=creator",
  parse(response){
    return response.results
  },
  comparator(model){
    return -model.get('time')
  }
});

export default CommentList;
