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
    return (
      <fieldset className="create-comment-fs">
      <form onSubmit={this.handleSubmit}>
        <label>Provide Course Name</label>
        <Input type="text" ref="course" className="course-name"/>
        <label>Rate A Course</label>
        <Input type="select" ref="rating" className="course-rating">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <label>Add Comment</label>
        <Input type="textarea" ref="comment" className="comment-textarea"/>
        <Button className="btn btn-success" type="submit">Save Comment</Button>
      </form>
      </fieldset>
    )
  }
});


export default AddComment;
