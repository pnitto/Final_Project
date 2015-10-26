import React from 'react';
import {Link, IndexLink} from 'react-router';

var App = React.createClass({
  propTypes: {
    children: React.PropTypes.node
  },
//Work on the the hamburge nav bar//
  render() {
    return (
      <div>
        <nav className="top-bar" data-topbar role="navigation">
         <ul className="title-area">
           <li className="name">
             <h1><IndexLink to="/">Home</IndexLink></h1>
           </li>
           <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
         </ul>

         <section className="top-bar-section">
           {/* Left Nav Section */}
           <ul className="left">
             <li><Link to="/signup">Sign Up</Link></li>
             <li><Link to="/login">Login</Link></li>
             <li><Link to="/create-scorecard">Add Scorecard</Link></li>
           </ul>
         </section>
       </nav>
       {this.props.children}
      </div>
    );
  }

});

export default App;
