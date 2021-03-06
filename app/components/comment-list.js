import React from 'react';
import store from '../store';
import AddComment from '../components/create-comment';
import BackboneMixin from '../mixins/backbone';
import {Glyphicon} from 'react-bootstrap';
import {Link } from 'react-router';


const Chat = React.createClass({

  mixins: [BackboneMixin],

  getModels(){
    return {
      comments: store.getComments()
    }
  },

  componentWillMount(){
    store.fetchComments();
  },

  handleDelete(comment,e){
    console.log("current User" , store.getSession().currentUser)
    console.log('creator' , comment.creator)
    if(store.getSession().currentUser.objectId === comment.creator.objectId){
    store.destroyComment(comment)
  }else{
    alert("You don't have permission to delete this comment.")
    }
  },

  render(){
    let comments = this.state.comments;

    return (
      <div className="chat-div">
      <h1 className="chat-room-heading">Chat Room</h1>
      <AddComment />
      <div className="comments-list-div">
      <ul className="chat-ul">
        {comments.map((x)=>{
          return (<div className="comment-card-div" key={x.objectId}>
          <Glyphicon className="remove-comment" onClick={this.handleDelete.bind(this,x)} glyph="remove" />
          <li><Link to={`/chat/${x.objectId}`} state={{comment:x}}><h4 className="comment-course-name">{x.courseName}</h4></Link><span className="comment-username">{x.creator.username}</span></li>
                  <li><span className="comment-rating">{"(" +  x.rating + " out of 5)"}</span></li>
                    <li><span className="comment">{x.comment}</span></li>
                </div>)
        })}
      </ul>
    </div>
      </div>
    )
  }
})

export default Chat;
