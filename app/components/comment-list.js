import React from 'react';
import store from '../store';
import AddComment from '../components/create-comment';

const Chat = React.createClass({
  propTypes: {
    comments: React.PropTypes.object
  },
  getDefaultProps(){
    return {
      comments: store.getComments()
    }
  },
  componentWillMount(){
    this.props.comments.fetch();
    this.props.comments.on('sync add remove', this.forceUpdate.bind(this,null),this)
  },
  componentWillUnmount(){
    this.props.comments.off('sync add remove', null, this)
  },
  handleDelete(comment,e){
    var deleted_comment = this.props.comments.get(comment.objectId);
    deleted_comment.destroy();
  },
  render(){
    var comments = this.props.comments.toJSON();
    return (
      <div>
      <h1>Chat Room</h1>
      <AddComment />
      <ul>
        {comments.map((x)=>{
          return (<li key={Math.round(Math.random() * 100000)}>Course Name: {x.courseName}-Course Rating: {x.rating}-Course Comment: {x.comment}<button onClick={this.handleDelete.bind(this,x)}>X</button></li>)
        })}
      </ul>
      </div>
    )
  }
})

export default Chat;
