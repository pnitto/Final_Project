import React from 'react';
import store from '../store';

const AddComment = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    store.getComments().create({
      comment: this.refs.comment.value,
      courseName: this.refs.course.value,
      rating: Number(this.refs.rating.value),
      creator: store.getSession().get('currentUser')
    },{wait: true})

    this.refs.comment.value = '';
    this.refs.course.value = '';

  },
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Course Name</label>
        <input type="text" ref="course" />
        <select ref="rating">
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>Add Comment</label>
        <textarea type="text" ref="comment" />
        <button type="submit">Save Comment</button>
      </form>
    )
  }
});


export default AddComment;
