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
      <div className="chat-div">
      <h1>Chat Room</h1>
      <AddComment />
      <div className="comments-list-div">
      <ul className="chat-ul">
        {comments.map((x)=>{
          return (<div className="comment-card-div"key={Math.round(Math.random() * 100000)}>
                  <li>Course Name: {x.courseName}</li>
                  <li>Course Rating: {x.rating}</li>
                  <li>Course Comment: {x.comment}</li>
                </div>)
        })}
      </ul>
    </div>
      </div>
    )
  }
})

export default Chat;
