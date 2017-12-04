import React, {Component} from "react";
import "./Carousel.css";
import API from "../../utils/API";


class Carousel extends Component {
    state = {
        cards : []
    }

    componentDidMount() {
        this.loadProfile();
    }
    // load user cards from database
    loadProfile() {
        console.log("This is from Carousel component: " + localStorage.getItem("profile"));
        API.getUserProfile(localStorage.getItem("profile"))
        .then(res => {
            console.log(`From Carousel : ${res}`);
        })
        .catch(err => {console.log(err);});
        ;
    }

    render() {
        return(
            <div id="carousel">
                    <div className="slide">
                        <img src="https://www.paypal-gifts.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/t/o/toysrus_card_xxlweb.png" alt="sometext"/>
                    </div>
                </div>
        )
    }
}

export default Carousel;