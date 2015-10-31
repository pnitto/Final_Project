import React from 'react';
import {Link, IndexLink} from 'react-router';
import store from '../store'
import BackboneMixin from '../mixins/backbone';
///React burger menu
//React components
var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },

  mixins: [BackboneMixin],

  getModels(){
    return {
      session: store.getSession()
        }
  },
  handleLogout(e){
    e.preventDefault();
    store.invalidateSession();
  },
  render() {
    let session = this.state.session;
    let loggedIn = session.isAuthenticated;
    let currentUser = session.currentUser;
    let username = (currentUser && currentUser.username) || 'Me';

    return (
      <div>
        <p className="username">{username}</p>
        <nav className="nav">
         <ul className="nav-ul">
           <li className="nav-li"><IndexLink className="Links" to="/"><i className="fa fa-home fa-2x"></i></IndexLink></li>
             <li className="nav-li"><Link className="Links" to="/signup">Sign Up</Link></li>
             <li className="nav-li"><Link className="Links" to="/login">Login</Link></li>
             <li className="nav-li"><a className="Links" href="#" onClick={this.handleLogout}>Logout</a></li>
             <li className="nav-li"><Link className="Links" to="/create-scorecard">Add Scorecard</Link></li>
             <li className="nav-li"><Link className="Links" to="/chat"><i className="fa fa-comment fa-2x"></i></Link></li>
             <li className="nav-li"><Link className="Links" to="/slick-carousel">Slider</Link></li>
           </ul>
         </nav>
       {this.props.children}
      </div>
    );
  }
});


export default App;
