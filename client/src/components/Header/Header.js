import React from "react";
import "./Header.css";
import Login from "../Login";
import Signup from "../Signup";
import UserProfile from "../UserProfile";
import { Link } from "react-router-dom";


const Header = (props) => (
    <div className="jumbotron text-center">
        <Login />
        <Signup />
        <h1>SwapCard</h1>
        <h2>A place to trade your unused and unwanted gift cards for retailer you prefer</h2>
        <button className="btn btn-success">Log in</button>
        <button className="btn btn-danger">Sign up</button>
        {/* creat button to test userprofile page route */}
        <button className={window.location.pathname === "/" ? "active btn" : ""}>
            <Link to="/UserProfile">User Profile - test only</Link>
        </button>
    </div>
)

export default Header;