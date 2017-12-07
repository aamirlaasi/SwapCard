import React, {Component} from "react";
import "./CarouselNotify.css";
import API from "../../utils/API";
import AlertContainer from 'react-alert';


class CarouselNotify extends Component {
    state = {
        loading: true,
        cards : []
    }
    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      }

      showAlert = () => {
        this.msg.show('Transaction success', {
          time: 1000,
          type: 'info'
        })
      }
    
    componentDidMount() {
        this.loadProfile();
    }
    handleAcceptTrade(id, traderEmail) {
        // console.log(id);
        API.acceptTrade(id, traderEmail);
        this.showAlert();
        this.loadProfile();
    }   
    //function to handlecanceltrade
    handleCancelTrade(id) {
        console.log(id);
        API.cancelTradeCard(id);
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

    // load trader cards with same price from database
    // loadTraderCardSamePrice() {
    //     API.getUserCardsSamePrice(localStorage.getItem("profile"), price)
    //     .then(res => {
    //         console.log(res.data);
    //         this.setState({
    //             cards: res.data
    //         })
    //     }
    //     ).catch(err => console.log(err));
    // }

    render() {
        return(
            <div id="carousel">
            {<p>You have {this.state.cards.length} requests</p>}
                    {(  
                        this.state.cards.map((card, index) => {
                            return(
                                <div className="slide" key={index}>
                                    <img src={card.fimage} alt={index}/>
                                    <button onClick={()=>this.handleAcceptTrade(card._id, card.traderEmail)}>Click to trade</button>  
                                    <button onClick={()=>this.handleCancelTrade(card._id)}>Click to cancel</button>                                                     
                                </div>
                            )
                        })
                        ) 
                    }
                    {/* alert message */}
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
        )
    }
}

export default CarouselNotify;