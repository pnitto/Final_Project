import React from 'react';
import {Link, IndexLink} from 'react-router';
import store from '../store'
import BackboneMixin from '../mixins/backbone';
import {DropdownButton, MenuItem,Glyphicon,Grid, Row, Col} from 'react-bootstrap';


//Drop down username button is not working

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
        <DropdownButton className="drop-down-btn" bsStyle="primary" title={username} id="bg-nested-dropdown">
          <MenuItem eventKey="1"><Link className="Links" to="/login">Login</Link></MenuItem>
             <MenuItem eventKey="2"><a className="Links" href="#" onClick={this.handleLogout}>Logout</a></MenuItem>
             <MenuItem eventKey="3"><Link className="Links" to="/signup">Sign Up</Link></MenuItem>
         </DropdownButton>

        <nav className="nav">
         <ul className="nav-ul">
           <li className="nav-li-first"><IndexLink className="Links" to="/"><i className="fa fa-home fa-3x"></i></IndexLink></li>
             <li className="nav-li"><Link className="Links" to="/create-scorecard"><Glyphicon className="list-icon"glyph="list" /></Link></li>
               <li className="nav-li"><Link className="Links" to="/graphs"><Glyphicon className="stats-icon" glyph="stats" /></Link></li>
             <li className="nav-li"><Link className="Links" to="/chat"><i className="fa fa-comment fa-2x"></i></Link></li>
           </ul>
         </nav>
       {this.props.children}
      </div>
    );
  }
});


export default App;
