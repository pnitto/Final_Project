import React from 'react';
import {Link } from 'react-router';
import {Button} from 'react-bootstrap';

const Home = React.createClass({

  render(){
    return (
      <div className="home-div">
        <h1><i>Welcome to Fore Score 2.0</i></h1>
        <Link to="/create-scorecard" className="home-scorecard-link"><Button type="button" bsSize="large" className="btn btn-success" data-toggle="button" aria-pressed="false" autoComplete="off">Begin Round</Button></Link>
      </div>
    )
  }
})

export default Home;
