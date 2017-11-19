import React, { Component } from "react";
import API from "../../utils/API";
import Header from "../../components/Header";

class Cards extends Component {
    state = {
        cards: []
    }
    loadCards = () => {
        API.getCards()
        .then(res =>
            this.setState({cards: res.data})
        ).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Header />
                
            </div>
        )
    }
}

export default Cards;
