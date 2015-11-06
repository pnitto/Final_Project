import React from 'react';
import { History } from 'react-router';
import store from '../store';
import {Input, Button} from 'react-bootstrap';

const Login = React.createClass({
  propTypes: {
    location: React.PropTypes.object
  },
  mixins: [History],

  getInitialState(){
    return {
      error: false
    }
  },
  handleSubmit(e){
    e.preventDefault();
    let username = this.refs.email.getValue();
    let password = this.refs.password.getValue();

    let session = store.getSession();

    store.authenticateSession({username, password}).then((loggedIn)=>{
      if(!loggedIn)
        return this.setState({ error: true })

        var { location } = this.props

        if (location.state && location.state.nextPathname){
          this.history.replaceState(null, location.state.nextPathname)
        }else{
          this.history.replaceState(null, '/')
        }
    })
  },
  render() {
    return (
      <div className="login-div">
      <h3 className="login-heading">Login</h3>
      <form className="login-form" onSubmit={this.handleSubmit}>
        <Input className="login-email" type="email" placeholder="Provide Email Address" ref="email"/>
        <Input className="login-password" type="password" placeholder="Provide Password" ref="password"/>
        <Button bsStyle="success" bsSize="large" type="submit">Log In</Button>
        {
          this.state.error && (
            <p>Bad Login Information</p>
          )
        }
      </form>
    </div>
    );
  }
});

export default Login;
