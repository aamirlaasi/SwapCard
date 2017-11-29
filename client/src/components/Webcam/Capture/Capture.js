import React, {Component} from "react";
import Modal from "react-modal";
import WebcamCapture from "../WebcamCapture";


class Capture extends Component {

    render(){
        return(
            <Modal
                isOpen={!!this.props.selectWebcam}
                onRequestClose={this.props.unselectWebcam}
            >
                {/* <button>Close</button> */}
                <WebcamCapture />
            
            </Modal>
        )
    }
}

export default Capture;