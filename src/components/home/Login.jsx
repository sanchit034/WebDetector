import React, {useRef} from 'react';
import "../../styles/Home.scss";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  
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
              <h3>Login to your Account</h3>
            </div>
            <div className="loginSubHeadingContainer">
              <h4>Sign in</h4>
            </div>
            <div className="loginFormContainer">
              <div className="loginFormItem">
                <label htmlFor="email" className='formItem'>Email Id</label>
                <input type="email"  className="formItem" id="email" ref={emailRef} placeholder=" Enter your email address"/>
              </div>
              <div className="loginFormItem">
              <label htmlFor="password" className="formItem">Password</label>
              <input type="password" className="formItem" id="password" ref={passwordRef} placeholder=" Enter your password" />
              </div>
            </div>
            <div className="rememberMeContainer">
              <p>Remember me</p>
            </div>
            <div className="loginBtnContainer">
              <button>Login Button</button>
            </div>
          </div>
        </div>
    </div>
  )
}
