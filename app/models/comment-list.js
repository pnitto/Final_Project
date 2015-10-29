import Backbone from 'backbone';
import Comment from '../models/comment';

const CommentList = Backbone.Collection.extend({
  model: Comment,
  url: "https://api.parse.com/1/classes/Comments",
  parse(response){
    response.results
  }
});

export default CommentList;
