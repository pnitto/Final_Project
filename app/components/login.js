import React from 'react';

var Login = React.createClass({
  render() {
    return (
      <div className="login-div">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Provide Email Address" />
        <input type="password" placeholder="Provide Password" />
      </form>
    </div>
    );
  }
});

export default Login;
