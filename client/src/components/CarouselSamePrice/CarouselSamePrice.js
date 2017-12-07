import React, {Component} from "react";
import "./CarouselSamePrice.css";
import API from "../../utils/API";


class CarouselSamePrice extends Component {
    state = {
        loading: true,
        cards : []
    }
    
    // isLogin() {
    //     if(localStorage.getItem("profile")) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }


    // When the component mounts, load all cards of user and save them to this.state.cards
    componentDidMount() {
        this.loadCardsSamePrice();
    }
    // load user cards from database
    // removeCard(id) {
    //     console.log(id);
    //     // API.removeCard(id);
    // }
    loadCardsSamePrice() {
        API.getUserCardsSamePrice(localStorage.getItem("profile"), this.props.price)
        .then(res => {
            // console.log(res.data);
            this.setState({
                cards: res.data
            });
        }
        ).catch(err => console.log(err));
    }

    render() {
        return(
            <div id="carousel">
                    {/* <div className="slide">
                        <img src="https://www.paypal-gifts.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/t/o/toysrus_card_xxlweb.png" alt="sometext"/>
                    </div> */}
                    {/* {console.log(this)} */}
                    {
                        this.state.cards.map((card) => {
                            return(
                                <div className="slide" key={card._id}>
                                    <img src={card.fimage} alt={card._id}/>
                                    <button>Remove</button>                                    
                                </div>
                                
                            )
                        })
                    }
                </div>
        )
    }
}

export default CarouselSamePrice;