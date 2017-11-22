import React from "react";
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

const CardModal = (props) => (
        <Modal style={style}
            isOpen={!!props.selectedCard}
            onRequestClose={props.closeModal}
            contentLabel="Card details"
        >
            <div>
                <div className="row content">
                    <h3>Gift Card you wish to trade</h3>
                    <hr />
                    <div className="img-container text-center col-lg-7" onClick={props.loadModal}>
                        <img alt={props.store} src={props.fimage} />
                    </div>

                    <div className="cardDetail col-lg-5">
                        <ul>
                            <li>
                            <strong>Owner:</strong>
                            </li>
                            <li>
                            <strong>User rating: 5</strong>
                            </li>
                            <li>
                            <strong>Store:</strong> {props.store}
                            </li>
                            <li>
                            <strong>Price:</strong> {props.price}
                            </li>
                            <li>
                            <strong>ExpDate:</strong> {props.exp}
                            </li>
                        </ul>
                        <button style={{"marginRight": "20px"}} className="btn btn-success" onClick={props.handleTrade}>CLICK TO TRADE</button>
                        <button className="btn btn-danger" onClick={props.closeModal}>CLOSE</button>
                    </div>
                    <hr /> 
                </div>
                <hr />
                {/* Card that user have */}
                <div className="row">
                    {true ? <Carousel /> : "Please login or create accout to trade card"}
                </div>                

            </div>
        </Modal>
    );

export default CardModal;