import React from 'react';
import BackboneMixin from '../mixins/backbone';
import {History} from 'react-router';
import update from 'react-addons-update';
import store from '../store';
import{Button, Input} from 'react-bootstrap';


const EditComment = React.createClass({

  mixins: [BackboneMixin, History],

  getModels(){
    let commentId = this.props.params.id;
    return {comment: store.getComment(commentId)}
  },
  handleChange(prop,e){
    let value = prop === "rating" ? Number(e.target.value) : e.target.value;
    let newState = {};
    newState[prop] = {
      $set: value
    }
    this.setState({
      comment: update(this.state.comment,newState)
    });

  },

  handleSubmit(e){
    e.preventDefault();
    let comment = this.state.comment
    store.saveComment(comment)
     this.history.goBack()
  },
  render(){
    let comment = this.state.comment
    return (
      <fieldset className="edit-comment-fieldset">
        <form onSubmit={this.handleSubmit}>

          <label>Edit Course Name</label>
          <Input type="text" ref="courseName" onChange={this.handleChange.bind(this,'courseName')} value={comment.courseName}/>

          <label>Edit Comment</label>
          <Input type="textarea" ref="comment" onChange={this.handleChange.bind(this,'comment')} value={comment.comment}/>

          <label>Edit Rating</label>
          <Input type="number" ref="rating" onChange={this.handleChange.bind(this,'rating')} value={comment.rating}/>
          <Button type="submit">Update Comment</Button>
          
        </form>
      </fieldset>
    )
  }

})

export default EditComment;
