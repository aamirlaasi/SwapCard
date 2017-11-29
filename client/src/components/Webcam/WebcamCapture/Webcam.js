import Webcam from 'react-webcam';
import React from "react"

class WebcamCapture extends React.Component {
    state = {
      img: "",
      selectWebcam: true
    }
    setRef = (webcam) => {
      this.webcam = webcam;
    }
   
    capture = (e) => {
      e.preventDefault();
      const imageSrc = this.webcam.getScreenshot();
      this.setState({
        img: imageSrc,
        selectWebcam: false
      })
    };
   
    render() {
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />
          <button onClick={this.capture} selectWebcam={this.state.selectWebcam}>Front of card</button>
          <img src={this.state.img} />
        </div>
      );
    }
  }

  export default WebcamCapture;