import Webcam from 'react-webcam';
import React, {Component} from "react";
import Modal from "react-modal";

class WebcamCapture extends Component {
    state = {
      front: "",
      selectWebcam: true
    }
    setRef = (webcam) => {
      this.webcam = webcam;
    }

   
    capture = (e) => {
      // e.preventDefault();
      const imageSrc = this.webcam.getScreenshot();
      this.setState({
        front: imageSrc,
        selectWebcam: false
      })
    };
   
    render() {
      return (
        <Modal
          front = {this.state.front}
          isOpen={!!this.props.selectWebcam}
          onRequestClose={this.props.unselectWebcam}
        >
          <div className="row">
            <div className="col-lg-4">
              <Webcam
                audio={false}
                height={350}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
              />
            </div>
            <div className="col-lg-4">
              <button onClick={this.capture} selectWebcam={this.state.selectWebcam}>Click here to take picture</button>
              {this.state.img ? (
                <div>
                <img src={this.state.img} alt=""/>
                <br />
                <button onClick={this.closeWebcam}>Finish</button>
                  
                </div>
              ) : <p>Please take picture</p> }
            </div>
            
          </div>
      
      </Modal>
      );
    }
  }

  export default WebcamCapture;