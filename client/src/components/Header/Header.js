import React from "react";
import "./Header.css";
import Login from "../Login";
import Signup from "../Signup";

const Header = (props) => (
    <div className="jumbotron text-center">
        <Login />
        <Signup />
        <h1>SwapCard</h1>
        <h2>A place to trade your unused and unwanted gift cards for retailer you prefer</h2>
        <button className="btn btn-success">Log in</button>
        <button className="btn btn-danger">Sign up</button>
    </div>
)

export default Header;