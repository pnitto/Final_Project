import React from 'react';
import store from '../store';
import AddComment from '../components/create-comment';
import BackboneMixin from '../mixins/backbone';

const Chat = React.createClass({

  propTypes: {
    comments: React.PropTypes.object
  },

  mixins: [BackboneMixin],

  getModels(){
    return {
      comments: store.getComments()
    }
  },
  componentWillMount(){
    store.fetchComments();
  },
  handleDelete(e){
    store.destroyComment(this.state.comment).then(()=>{
      this.history.replaceState(null, '/')
    })
  },
  render(){
    var comments = this.state.comments
    return (
      <div>
      <h1>Chat Room</h1>
      <AddComment />
      <ul>
        {comments.map((x)=>{
          return (<li key={Math.round(Math.random() * 100000)}>Course Name: {x.courseName}-Course Rating: {x.rating}-Course Comment: {x.comment}</li>)
        })}
      </ul>
      </div>
    )
  }
})

export default Chat;
