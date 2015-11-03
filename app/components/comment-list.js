import React from 'react';
import store from '../store';
import AddComment from '../components/create-comment';
import BackboneMixin from '../mixins/backbone';
import {Glyphicon} from 'react-bootstrap';

//need to access email address of user who created it
//need to only edit and delete comments that, that user made

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
  handleDelete(e){
    if(this.state.comment.get('creator') === this.get('currentUser').creator ){
    store.destroyComment(this.state.comment).then(()=>{
      this.history.replaceState(null, '/')
    })
  }else{
    alert("You don't have permission to delete this comment.")
    }
  },
  render(){
    var comments = this.state.comments
    return (
      <div className="chat-div">
      <h1 className="chat-room-heading">Chat Room</h1>
      <AddComment />
      <div className="comments-list-div">
      <ul className="chat-ul">
        {comments.map((x)=>{
          return (<div className="comment-card-div"key={Math.round(Math.random() * 100000)}>
                  <li>CreatedBy: {x.creator.username}</li>
                  <li>Course Name: {x.courseName}</li>
                  <li>Course Rating: {x.rating}</li>
                  <li>Course Comment: <span className="comment"><i>{x.comment}</i></span></li>
                  <li><Glyphicon onClick={this.handleDelete} glyph="remove" /></li>
                </div>)
        })}
      </ul>
    </div>
      </div>
    )
  }
})

export default Chat;
