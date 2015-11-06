import React from 'react';
import store from '../store';
import BackboneMixin from '../mixins/backbone';
import {Input,Button} from 'react-bootstrap';


const AddComment = React.createClass({

  mixins:[BackboneMixin],

  handleSubmit(e){
    e.preventDefault();
    store.saveComment({
      comment: this.refs.comment.getValue(),
      courseName: this.refs.course.getValue(),
      rating: Number(this.refs.rating.getValue()),

    })

    this.refs.comment.value = '';
    this.refs.course.value = '';
    this.refs.rating.value = '';

  },
  render(){
    //added value property to each option element
    return (
      <form className="chat-form" onSubmit={this.handleSubmit}>
        <label>Provide Course Name</label>
        <Input type="text" ref="course" className="course-name"/>
        <label>Rate A Course</label>
        <Input type="select" ref="rating" className="course-rating">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Input>
        <label>Add Comment</label>
        <Input type="textarea" ref="comment" className="comment-textarea"/>
        <Button className="btn btn-success" type="submit">Save Comment</Button>
      </form>
    )
  }
});


export default AddComment;
