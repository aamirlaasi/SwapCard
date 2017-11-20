import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header";
import Card from "../../components/Card"

class Cards extends Component {
    state = {
        cards: []
    }

    // When the component mounts, load all cards and save them to this.state.cards
    componentDidMount() {
        this.loadCards();
    };

    loadCards = () => {
        API.getCards()
        .then(res => {
            console.log(res.data);
            this.setState({cards: res.data})
        }
            
        ).catch(err => console.log(err));
    };
    
    render() {
        return (
            <div className="row">
                <Header />
                <div className="row text-center">
                    {this.state.cards.map(card => {
                        return (
                            <Card
                                fimage={card.fimage} 
                                key={card._id}
                                store={card.store}
                                price={card.price}
                                exp={card.exp}
                             />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Cards;
