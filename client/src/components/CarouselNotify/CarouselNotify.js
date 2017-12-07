import React, {Component} from "react";
import "./CarouselNotify.css";
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
        API.getTradeCards(localStorage.getItem("profile"))
        .then(res => {
            console.log(res.data);
            this.setState({
                cards: res.data
            })
        }
        ).catch(err => console.log(err));
    }

    render() {
        return(
            <div id="carousel">
            {<p>You have {this.state.cards.length} requests</p>}
                    {(  
                        this.state.cards.map((card, index) => {
                            return(
                                <div className="slide" key={index}>
                                    <img src={card.fimage} alt={index}/>
                                    <button>Click to trade</button>  
                                    <button>Click to cancel</button>                                                     
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