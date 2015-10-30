import React from 'react';
import {Link } from 'react-router';

const Home = React.createClass({

  render(){
    return (
      <div>
        <h1><i>Welcome to Fore Score 2.0</i></h1>
        <Link to="/create-scorecard" className="home-scorecard-link"><button>Begin Round</button></Link>
      </div>
    )
  }
})

export default Home;
