import React, {useRef, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';
import "../../styles/Home.scss";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberMeImage, setRememberMeImage] = useState("assets/login/checkIcon.svg");
  const [savedEmailId, setSavedEmailId] = useState();
  const [savedPassword, setSavedPassword] = useState();

  const selectRememberMe = () => {
    if(rememberMe) {
      setRememberMe(false);
      setRememberMeImage("assets/login/checkIconSelected.svg");
    } else {
      setRememberMe(true);
      setRememberMeImage("assets/login/checkIcon.svg");
    }
  }

  const checkSavedDetails = () => {
    
  }
  checkSavedDetails();
  
  return (
    <div className='loginPage'>
      <div className="loginContentItemContainer">
          <div className="loginImgContainer">
            <div className='loginImg'>
              <img src="assets/login/loginImg.svg" alt="" />
            </div>
          </div>
          <div className="loginContent">
            <div className="loginHeadingContainer">
              <p>Login to your Account</p>
            </div>
            <div className="loginSubHeadingContainer">
              <p>------------- Sign in -------------</p>
            </div>
            <div className="loginFormContainer">
              <div className="loginFormItem">
                <label htmlFor="email" className='formItem'>Email Id</label>
                <input type="email"  className="formItem" id="email" ref={emailRef} defaultValue={savedEmailId} placeholder=" Enter your email address"/>
              </div>
              <div className="loginFormItem">
              <label htmlFor="password" className="formItem">Password</label>
              <input type="password" className="formItem" id="password" ref={passwordRef} defaultValue={savedPassword} placeholder=" Enter your password" />
              </div>
            </div>
            <div className="rememberMeContainer">
              <img src={rememberMeImage} alt="1" onClick={selectRememberMe} /> Remember me
            </div>
            <div className="loginBtnContainer">
              <button>Login</button>
            </div>
          </div>
        </div>
    </div>
  )
}
