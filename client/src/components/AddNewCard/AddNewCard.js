import React, {Component} from "react";
import Modal from "react-modal";
import Capture from "../Webcam/Capture";

class AddNewCard extends Component {
    state = {
        selectWebcam: undefined,
        front: ""
    }

    selectWebcam = (e) => {
        e.preventDefault();
        this.setState({
            selectWebcam: true
        })
    }

    unselectWebcam = (e) => {
        e.preventDefault();
        this.setState({
            selectWebcam: false
        })
    }

    render() {
        return(
            <Modal
                isOpen={!!this.props.selectAddNewCard}
                onRequestClose={this.props.unselectAddNewCard}
            >
                <div>
                    <h2>Take picture of front and back, input card details</h2>
                    <hr />
                    <form>
                        <input type="text" /> Card Name
                        <input type="text" /> Card Price
                        <input type="text" /> Exp date
                        <button onClick={this.selectWebcam}>Capture front of Card</button>
                        {/* <img src={this.state.front}/> */}
                        <button>Capture back of Card</button>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <Capture unselectWebcam={this.unselectWebcam} selectWebcam={this.state.selectWebcam} front={this.state.front} />
            </Modal>
        )
    }
}

export default AddNewCard;