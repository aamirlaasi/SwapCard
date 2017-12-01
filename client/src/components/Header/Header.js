import React, {Component} from "react";
import "./Header.css";
import Login from "../Login";
import Signup from "../Signup";
import {Link} from "react-router-dom";

class Header extends Component {
  state = {
    selectedLogin: undefined
  }
  handleLogin = ()=> {
    this.setState({
      selectedLogin:true
    })
  }
  closeLogin = ()=> {
    this.setState({
      selectedLogin:false
    })
  }
  handleSignup = ()=> {
    this.setState({
      selectedSignup:true
    })
  }
  // handleSignupSubmit = event => {
  //   event.preventDefault();
  //   API.saveBook({
  //     title: this.state.title,
  //     author: this.state.author,
  //     synopsis: this.state.synopsis
  //   })
  // }
  closeSignup = ()=> {
    this.setState({
      selectedSignup:false
    })
  }
  render() {
    return (
        <div className="jumbotron text-center">
            <Login closeLogin={this.closeLogin} handleLogin={this.state.selectedLogin} />
            <Signup closeSignup={this.closeSignup} handleSignup={this.state.selectedSignup} handleSignupSubmit={this.handleSignupSubmit} />
            <h1>SwapCard</h1>
            <h2>A place to trade your unused and unwanted gift cards for retailer you prefer</h2>
            <button className="btn btn-success" onClick={this.handleLogin}>Log in</button>
            <button className="btn btn-danger" onClick={this.handleSignup}>Sign up</button>
        </div>
    )
  }
}


export default Header;
