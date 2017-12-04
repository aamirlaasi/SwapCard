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
    removeCard(id) {
        console.log(id);
        // API.removeCard(id);
    }
    loadProfile() {
        API.getUserProfile(localStorage.getItem("profile"))
        .then(res => {
            // console.log(res.data);
            this.setState({
                cards: res.data.giftcard
            })
        }
        ).catch(err => console.log(err));
    }

    render() {
        return(
            <div id="carousel">
                    {/* <div className="slide">
                        <img src="https://www.paypal-gifts.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/t/o/toysrus_card_xxlweb.png" alt="sometext"/>
                    </div> */}
                    { this.state.cards.length>0 ? (
                        this.state.cards.map((card, index) => {
                            return(
                                <div className="slide" key={index}>
                                    <img src={card.fimage} alt={index}/>
                                    <button onClick={()=>{this.removeCard(card.store)}}>Remove</button>                                    
                                </div>
                                
                            )
                        })
                        ) 
                        : <p>You have no cards. Please add new card</p> 
                    }
                </div>
        )
    }
}

export default Carousel;