import React from 'react';
import store from '../store';
import BackboneMixin from '../mixins/backbone';


const AddComment = React.createClass({

  mixins:[BackboneMixin],

  handleSubmit(e){
    e.preventDefault();
    store.saveComment({
      comment: this.refs.comment.value,
      courseName: this.refs.course.value,
      rating: Number(this.refs.rating.value),
    },{wait: true})

    this.refs.comment.value = '';
    this.refs.course.value = '';
    this.refs.rating.value = '';

  },
  render(){
    return (
      <fieldset className="create-comment-fs">
      <form onSubmit={this.handleSubmit}>
        <label>Provide Course Name</label>
        <input type="text" ref="course" className="course-name"/>
        <label>Rate A Course</label>
        <select ref="rating" className="course-rating">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>Add Comment</label>
        <textarea type="text" ref="comment" className="comment-textarea"/>
        <button type="submit">Save Comment</button>
      </form>
      </fieldset>
    )
  }
});


export default AddComment;
