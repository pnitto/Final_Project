import React from 'react';
import { History } from 'react-router';
import store from '../store';

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
    let username = this.refs.email.value;
    let password = this.refs.password.value;

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
      <h1>Login</h1>
      <form onSubmit={this.handleSubmit}>
        <input type="email" placeholder="Provide Email Address" ref="email"/>
        <input type="password" placeholder="Provide Password" ref="password"/>
        <input type="submit" value="Login" />
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
