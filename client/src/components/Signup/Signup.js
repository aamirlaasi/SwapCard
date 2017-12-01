import React from "react";
import Modal from "react-modal";
import "./Signup.css";

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
        padding                    : '20px',
        opacity                    : "1"
    }
  };

const Signup = (props) => (
    <Modal
        style={style}
        isOpen={props.handleSignup}
        onRequestClose={props.closeSignup}
        contentLabel="Signup"
    >
      <div id="signup-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog">
          <div className="signupmodal-container">
              <h1>New to SwapCard? Sign up!</h1>
            <form accept-charset="UTF-8" action="" method="post">
                <input  name="name" placeholder="Full Name" type="text" />
                <input  name="username" placeholder="Username" type="text" />
                <input  name="password" placeholder="Password" type="password" />
                <input
                  type="submit"
                  name="signup"
                  className="signup signupmodal-submit"
                  value="Sign Up"
                  onClick={props.handleSignupSubmit}/>
            </form>
        </div>
      </div>
      </div>
    </Modal>
)

export default Signup;
