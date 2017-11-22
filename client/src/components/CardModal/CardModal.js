import React from "react";
import Modal from "react-modal";
import "./CardModal.css";
const style = {
    content : {
        position                   : 'absolute',
        top                        : '40px',
        left                       : '100px',
        right                      : '100px',
        bottom                     : '40px',
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
            <div  className="cardModal text-center" onClick={props.loadModal}>
                <h3>Gift Card you wish to trade</h3>
                {/* <div className="img-container"> */}
                <img alt={props.store} src={props.fimage} />
                </div>
                <div className="content">
                    <ul>
                        <li>
                        <strong>Owner:</strong>
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
                {/* </div> */}
            </div>
        </Modal>
    );

export default CardModal;