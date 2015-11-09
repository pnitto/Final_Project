import React from 'react';
import {History} from 'react-router';
import store from '../store';
import User from '../models/user';
import {Input,Button} from 'react-bootstrap';


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
        <h3 className="sign-up-heading">Sign Up</h3>
          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <input className="sign-up-email"type="email" placeholder="Create Email" ref="email"/>
            <input className="sign-up-pword"type="password" placeholder="Create Password" ref="password" />
            <Button bsStyle="success" bsSize="large" className="sign-up-btn" type="submit">Sign up</Button>
            {this.state.error && (
              <p>{this.state.error}</p>
            )}
          </form>
     </div>
    )
  }
})

export default SignUp;
