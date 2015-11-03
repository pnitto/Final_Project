import React from 'react';
import {History} from 'react-router';
import store from '../store';
import User from '../models/user';


const SignUp = React.createClass({
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

    let email = this.refs.email.value;
    let username = email;
    let password = this.refs.password.value;

    store.createUser({username, password, email}).then(() => {
          let { location } = this.props;
          if (location.state && location.state.nextPathname) {
            this.history.replaceState(null, location.state.nextPathname);
          } else {
            this.history.replaceState(null, '/');
          }
        }, (xhr) => {
          this.setState({ error: xhr.responseJSON.error });
        });
      },
      
  render(){
    return (
      <div className="signup-div">
        <h1>Sign Up</h1>
          <form className="" onSubmit={this.handleSubmit}>
            <input type="email" placeholder="Email" ref="email"/>
            <input type="password" placeholder="Password" ref="password" />
            <input type="submit" value= "Sign Up" />
            {this.state.error && (
              <p>{this.state.error}</p>
            )}
          </form>
     </div>
    )
  }
})

export default SignUp;
