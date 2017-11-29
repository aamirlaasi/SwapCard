import React, {Component} from "react";
import "./Header.css";
import Login from "../Login";
import Signup from "../Signup";
import { Link } from "react-router-dom";


class Header extends Component {
    state = {
        selectLogin: undefined
    }
    handleLogin = () => {
        this.setState({
            selectLogin: true
        })
    }
    closeLogin = () => {
        this.setState({
            selectLogin: false
        })
    }
    render() {
        return(
            <div className="jumbotron text-center">
                <Login closeLogin={this.closeLogin} handleLogin={this.state.selectLogin}/>
                <Signup />
                <h1>SwapCard</h1>
                <h2>A place to trade your unused and unwanted gift cards for retailer you prefer</h2>
                <button className="btn btn-success" onClick={this.handleLogin} >Log in</button>
                <button className="btn btn-danger">Sign up</button>
                {/* creat button to test userprofile page route */}
                <button className={window.location.pathname === "/" ? "active btn" : ""}>
                    <Link to="/UserProfile">User Profile - test only</Link>
                </button>
            </div>
        )
    }
}

export default Header;