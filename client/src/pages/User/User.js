import React, {Component} from "react";
import UserProfile from "../../components/UserProfile"

class User extends Component {
    componentDidMount() {
        console.log("This is from Pages/User component");
        console.log(localStorage.getItem("profile"));
    }
    render() {
        return(
            <UserProfile />
        )
    }
}
export default User;