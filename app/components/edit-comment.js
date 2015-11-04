import React from 'react';
import BackboneMixin from '../mixins/backbone';
import {History} from 'react-router';
import update from 'react-addons-update';
import store from '../store';
import{Button, Input} from 'react-bootstrap';


const EditComment = React.createClass({

  mixins: [BackboneMixin, History],

  getModels(){
    let commentId = this.props.params.commentId;
    return {comment: store.getComment(commentId)}
  },
  render(){
    let comment = this.state.comment
    return (
      <fieldset className="edit-comment-fieldset">
        <form>
          <Input type="text" ref="courseName" value={comment.courseName}/>
          <Input type="textarea" ref="comment" value={comment.comment}/>
          <Input type="number" ref="rating" value={comment.rating}/>
          <Button type="submit">Update Comment</Button>
        </form>
      </fieldset>
    )
  }

})

export default EditComment;
