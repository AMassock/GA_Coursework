import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
  constructor() {
    super()
    this.state = { // set originating state of validator component
      email: "",
      password: "",
      passwordConfirm: "",
      valid: false,
      message: "",
      // isValid: "This is a valid Password",
      // invalid: "The passwords did not match",
    };

    // According to Docs this binding is necessary to make `this` work in the callback
    this.handlePassword = this.handlePassword.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleValidate = this.handleValidate.bind(this)
    this.print = this.print.bind(this)
  }

  // Set the value for first entered password
  handlePassword(e) {
    this.setState({password: e.target.value})
  }

  // Set the value for the second entered password
  handleConfirm(e) {
    this.setState({passwordConfirm: e.target.value})
  }

  // Compare the two entered passwords to see if they match
  handleValidate() {
    if(this.state.password == this.state.passwordConfirm) {
      this.setState({valid: true})       // if the passwords match set the "valid" value to true
      this.print();                      // and call print function to tell user if they match
    } else {
      this.setState({valid: false})
      this.print();
    }
  }

  // This will set the message based on the handleValidate conditional
  print() {
    if(this.state.valid == true) {
      this.setState({message: "This is a valid Password"})
    } else {
      this.setState({message: "The passwords did not match"})
    }
  }

  render() {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" value={this.state.value} onChange={this.handlePassword} />
        <input type="password" placeholder="Confirm Password" value={this.state.value} onChange={this.handleConfirm} />
        <button type="submit" value="submit" onClick={this.handleValidate}>Submit</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Validator;
