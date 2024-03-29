import React, {useRef, useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import "../../styles/Home.scss";

export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [rememberMe, setRememberMe] = useState(false);
  const [rememberMeImage, setRememberMeImage] = useState("assets/login/checkIcon.svg");
  const [savedEmailId, setSavedEmailId] = useState();
  const [savedPassword, setSavedPassword] = useState();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });

      // Corrected local storage syntax
      console.log(data);
      localStorage.clear();
      sessionStorage.clear(); 

      localStorage.setItem('email', data.userDetails.email);
      if(data.userDetails.username !== undefined) {
        localStorage.setItem('username', data.userDetails.username);
      }
      if(data.userDetails.mobileNo !== undefined) {
        localStorage.setItem('mobileNo', data.userDetails.mobileNo);
      }
      if(data.userDetails.rollNo) {
        localStorage.setItem('rollNo', data.userDetails.rollNo);
      }
      
      localStorage.setItem('userId', data.userDetails._id);
      
      if(data.msg!=='User has logged in but is not a member of any team'){
        localStorage.setItem('teamId', data.team._id);
        localStorage.setItem('teamName', data.team.teamName);
        localStorage.setItem('teamCode', data.team.teamCode);
        localStorage.setItem("teamid",data.team._id);
      }


      localStorage.setItem("token", data.token);
      localStorage.setItem("userid", data.userDetails._id);
      

      // if (data.status) {
      //   sessionStorage.setItem("token", data.token);
      //   if (data.user) {
      //     sessionStorage.setItem("userid", data.user._id);
      //   }
      // }

      if (data.msg === 'User Not found') {
        navigate('/login');
        toast.error('User Not found');
      } else if (data.msg === 'User has logged in but is not a member of any team') {
        navigate('/lobby/team');
        toast.success('User Logged In Successfully');
      } else if (data.msg === 'User logged in and joined a team') {
        navigate('/lobby');
        toast.success('User Logged In Successfully');
      } else {
        navigate('/login');
        toast.error('Incorrect Password');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      // Set the error message state variable
      setErrorMessage(error.message);
      toast.error(error.message);
    }
  };

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
              <img src={rememberMeImage} alt="1" onClick={selectRememberMe} className='clickBtn'/> Remember me
            </div>
            <div className="loginBtnContainer">
              <button onClick={handleSubmit} className='loginBtn'>Login</button>
            </div>
          </div>
        </div>
    </div>
  )
}
