import React, {Component} from "react";
import Modal from "react-modal";
import Carousel from "../Carousel";
import "./CardModal.css";
const style = {
    content : {
        position                   : 'absolute',
        top                        : '20px',
        left                       : '100px',
        right                      : '100px',
        bottom                     : '20px',
        border                     : '2px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        WebkitOverflowScrolling    : 'touch',
        borderRadius               : '4px',
        outline                    : 'none',
        padding                    : '20px'
    }
  };

class CardModal extends Component {
    notifyOwner(e) {
        e.preventDefault();
        alert(this.props.email);
    }
    render() {
        return(
            <Modal style={style}
                        isOpen={!!this.props.selectedCard}
                        onRequestClose={this.props.closeModal}
                        contentLabel="Card details"
                    >
                        <div>
                            <div className="row content">
                                <h3>Gift Card you wish to trade</h3>
                                <hr />
                                <div className="img-container text-center col-lg-7" onClick={this.props.loadModal}>
                                    <img alt={this.props.store} src={this.props.fimage} />
                                </div>
                                <form>
                                    <div className="cardDetail col-lg-5">
                                        <ul>
                                            <li>
                                            <strong>Owner:</strong> {this.props.owner}
                                            </li>
                                            <li>
                                            <strong>User rating: 5</strong>
                                            </li>
                                            <li>
                                            <strong>Store:</strong> {this.props.store}
                                            </li>
                                            <li>
                                            <strong>Price:</strong> {this.props.price}
                                            </li>
                                            <li>
                                            <strong>ExpDate:</strong> {this.props.exp}
                                            </li>
                                        </ul>
                                        <button style={{"marginRight": "20px"}} className="btn btn-success" onClick={this.notifyOwner.bind(this)}>Notify Owner</button>
                                        <button className="btn btn-danger" onClick={this.props.closeModal}>Close</button>
                                    </div>
                                </form>
                                <hr /> 
                            </div>
                            <hr />
                            {/* Card that user have */}
                            <div className="row">
                                 <h3>Your cards (which has same price to the above card)</h3>
                                {true ? <Carousel /> : "Please login or create accout to trade card"}
                            </div>                
                        </div>
                    </Modal>
        )
    }
}

export default CardModal;