import React, {Component} from "react";
import "./UserProfile.css";
// import Header from "../Header";
import { Link } from "react-router-dom";
// import API from "../../utils/API";
import Carousel from "../Carousel";

class UserProfile extends Component {
    render() {
        return (
            <div>
                {/* header */}
                <div className="jumbotron text-center">
                    <h1>SwapCard Dashboard</h1>
                    {/* creat button to test userprofile page route */}
                    <button className={window.location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Back to homepage</Link>
                    </button>
                </div>
                {/* end header */}
                <div>
                    
                </div>
            </div>
        )
    }
}

export default UserProfile;