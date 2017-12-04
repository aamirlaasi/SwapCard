import React, {Component} from "react";
import "./UserProfile.css";
// import Header from "../Header";
import { Link } from "react-router-dom";
// import API from "../../utils/API";
import Carousel from "../Carousel";
import AddNewCard from "../AddNewCard";

class UserProfile extends Component {
    state = {
        selectAddNewCard: undefined
    }

    selectAddNewCard = () => {
        this.setState({
            selectAddNewCard: true
        })
    }

    unselectAddNewCard = () => {
        this.setState({
            selectAddNewCard: false
        })
    }
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
                <div className="container">
                    <h2>Your Information</h2>
                    <hr />
                    {/* your information */}
                    <div className="row">
                        <div className="col-lg-5">
                            <p>Name: </p>
                            <p>Email Address: </p>
                        </div>
                        <div className="col-lg-5">
                            <p>You've got an order </p>
                        </div>
                    </div>
                    <h2>Cards Control</h2>
                    <hr />
                    <div className="row">
                        <div>
                            <button className="btn btn-success" onClick={this.selectAddNewCard} >Add new Card</button>
                            <button className="btn btn-danger">Click on card to remove</button>
                        </div>
                        <div>
                            <Carousel cards={this.props.cards} />
                        </div>
                    </div>
                </div>
                <AddNewCard unselectAddNewCard={this.unselectAddNewCard} selectAddNewCard={this.state.selectAddNewCard}/>
            </div>
        )
    }
}

export default UserProfile;