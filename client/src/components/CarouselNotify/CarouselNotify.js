import React, {Component} from "react";
import "./Carousel.css";
import API from "../../utils/API";


class CarouselNotify extends Component {
    state = {
        loading: true,
        cards : []
    }
    
    componentDidMount() {
        this.loadProfile();
    }
    // load user cards with chosen Boolean true from database
    loadProfile() {
        API.getUserProfile(localStorage.getItem("profile"))
        .then(res => {
            console.log(res.data);
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
                    {console.log(this)}
                    {(
                        this.state.cards.map((card, index) => {
                            return(
                                <div className="slide" key={index}>
                                    <img src={card.fimage} alt={index}/>
                                    <button onClick={()=>{this.removeCard(card.store)}}>Remove</button>                                    
                                </div>
                            )
                        })
                        ) 
                    }
                </div>
        )
    }
}

export default CarouselNotify;