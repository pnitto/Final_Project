import React from 'react';

const SignUp = React.createClass({
  render(){
    return (
      <div className="signup-div">
      <h1>Sign Up</h1>
      <form className="">
      <input type="email" ref="email"/>
      <input type="password" ref="password" />
      </form>
    </div>

    )
  }
})

export default SignUp;
