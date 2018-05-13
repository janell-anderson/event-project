import React, { Component } from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      username: '',
      email: '',
      pw_digest: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // when you start to type in the input box it will change the state
  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
    this.setState({
      username: '',
      email: '',
      pw_digest: '',
      redirectHome: true
    });
  }
  handleLogout(e) {
    e.preventDefault();
    this.props.handleLogOut();
  }

  render() {
    const selected = this.props.currentUser;
    const details = selected ? (<Link to='/'><button onClick={this.handleLogout}>Log Out</button></Link>) :
    (<form onSubmit={this.handleSubmit} className="login form" method="post">
      {this.state.redirectHome && <Redirect to='/'/>}

      <label htmlFor="username">Username
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.username}
          name="username"
        />
      </label>

      <label htmlFor="Email">Email
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.email}
          name="email"
        />
      </label>
      
      <label htmlFor="password">Password
        <input
          type="password"
          onChange={this.handleInputChange}
          value={this.state.pw_digest}
          name="pw_digest"
        />
      </label>
      <input
        type="submit"
        value="Login"
        onSubmit={this.handleSubmit}
      />
    </form>)
    console.log(selected)
    return (
      <div>
        {details}
      </div>
    )
  }
}

export default LoginForm;
