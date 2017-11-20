import React from "react";
import Modal from "react-modal";
import "./CardModal.css";
const style = {
    content: {
      width: "100%",
      height: "800px",
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
                        <strong>Store:</strong> {props.store}
                        </li>
                        <li>
                        <strong>Price:</strong> {props.price}
                        </li>
                        <li>
                        <strong>ExpDate:</strong> {props.exp}
                        </li>
                    </ul>
                    <button style={{"marginRight": "20px"}} className="btn btn-success" >CLICK TO TRADE</button>

                    <button className="btn btn-danger" onClick={props.closeModal}>CLOSE</button>
                {/* </div> */}
            </div>
        </Modal>
    );

export default CardModal;