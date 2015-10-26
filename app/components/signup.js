import React from 'react';

const SignUp = React.createClass({
  render(){
    return (
      <div className="signup-div">
      <h1>Sign Up</h1>
      <form className="">
      <input type="email" placeholder="Email" ref="email"/>
      <input type="password" placeholder="Password" ref="password" />
      <input type="submit" value= "Sign Up" />
      </form>
    </div>

    )
  }
})

export default SignUp;
